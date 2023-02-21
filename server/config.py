from dotenv import load_dotenv
import os
load_dotenv()

class ApplicationConfig:

  SECRETY_KEY = os.environ["SECRETY_KEY"]
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  SQLALCHEMY_ECHO = True
  SQLALCHEMY_DATABASE_URI = r"sqlite:///./db.sqlite"
