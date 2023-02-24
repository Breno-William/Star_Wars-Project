import { useState, useContext } from "react"
import flow from "../flow"

export function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const token = sessionStorage.getItem("token")

  // const handleLogin = async () => {
  //   console.log(email, password)

  //   const opts = {
  //          method: "POST",
  //          headers: {
  //            "Content-Type": "application/json"
  //          },
  //          body: JSON.stringify({
  //            email: email,
  //            password: password
  //          })
  //        }

  //   const resp = await flow.post("http://127.0.0.1:5000/login", opts)
  //   .then(resp => {
  //     if (resp.status === 200) {
  //       return resp
  //     }
  
  //     else alert("Error")
  //     })


  // }

  const handleLogin = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }

    fetch("http://127.0.0.1:5000/login", opts)
      .then(resp => {
        if (resp.status === 200) {
          return resp.json()
        }
        else alert("Error")
      })
      .then(data => {
        console.log("This came from backend", data)
        sessionStorage.setItem("token", data.access_token)
      })
      .catch(
        error => {
          console.error("There was an error!", error)
        }
      )

  }
  
  return(
    <div>
      {(token && token!="" && token!=undefined) ? `You are logged with this token: ${token}`: 
        <div>
          <form action="">
            <div>
              <label htmlFor="">Email: </label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="">Password: </label>
              <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </form>
          <button type="button" onClick={handleLogin}>Submit</button>
        </div>
      }
    </div>
  )
}