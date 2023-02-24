from flask import Flask, request, jsonify, session
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from config import ApplicationConfig
from flask_bcrypt import Bcrypt
from flask_session import Session
from models import db, User

app = Flask(__name__)

app.config.from_object(ApplicationConfig)

app.config["JWT_SECRET_KEY"] = "SECRET_KEY"
jwt = JWTManager(app)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
  db.create_all()

# -------------------- Current User ------------------------



# -------------------- Register ---------------------

@app.route("/register", methods=["POST"])
def register_user():
  name = request.json["name"]
  email = request.json["email"]
  password = request.json["password"]

  user_exists = User.query.filter_by(email=email).first() is not None

  if user_exists:
    return jsonify({"error": "User already exists"}), 409

  hashed_password = bcrypt.generate_password_hash(password)

  new_user = User(name=name, email=email, password=hashed_password)

  db.session.add(new_user)
  db.session.commit()

  return jsonify({
    "name": new_user.name,
    "id": new_user.id,
    "email": new_user.email,

  })

# ------------------- Login ------------------------

@app.route("/login", methods=["POST"])
def login_user(): 
  email = request.json["email"]
  password = request.json["password"]

  user = User.query.filter_by(email=email).first()

  if user is None:
    return jsonify({"error": "Unauthorized"}), 401

  if not bcrypt.check_password_hash(user.password, password):
    return jsonify({"error": "Unauthorized"}), 401

  access_token = create_access_token(identity=email)
  return jsonify(access_token=access_token)


  # return jsonify({
  #   "id": user.id,
  #   "email": user.email
  # })

if __name__ == "__main__":
  app.run(debug=True)