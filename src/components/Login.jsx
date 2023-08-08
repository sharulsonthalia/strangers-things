//Login Component

import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"


const COHORT_NAME = `2306-FSA-ET-WEB-FT-SF`
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Login = ( { token, setToken } ) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch(
            `${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username: username,
                password: password
              }
            })
          });
          const result = await response.json();
          console.log(result)
            setToken(result.data.token)
        } catch (err) {
          console.error(err);
        }
      }

      console.log(token)

      useEffect(() => {
        console.log("Login Token:", token);
        if (token) {
            navigate('/allproducts');
        }
    }, [token]);

    return (
        <>
        <h1> Log In to Buy Some Stuff!</h1>
        <form onSubmit={loginUser}>
            <label>
                Username: <input onChange={(e)=>setUsername(e.target.value)} value={username}></input>
            </label>
            <label>
                Password: <input onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            </label>
            <button type="submit">Log In!</button>
        </form>
        <Link to = {'/register'}>
            <h4>New User? Register Here</h4>
        </Link>
        </>
    )
}

export default Login