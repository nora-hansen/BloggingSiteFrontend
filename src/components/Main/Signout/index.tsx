import { useContext, useEffect } from "react"
import { UserContext } from "../../../App"
import { Navigate } from "react-router-dom"


function Signout()
{
    const userContext = useContext(UserContext)

    useEffect(() => {
        userContext.setBearer("")
        userContext.setUser({})
    }, [])

    return(
        <Navigate to="/" />
    )
}

export default Signout