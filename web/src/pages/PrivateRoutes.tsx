import { Outlet, Navigate} from "react-router-dom"


export function PrivateRoutes() {

  const auth = {"token": false}

  return (
    auth.token ? <Outlet/> : <Navigate to={"/"}/>
  )
}
