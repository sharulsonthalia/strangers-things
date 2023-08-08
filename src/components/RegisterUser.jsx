//Register Component

import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const COHORT_NAME = `2306-FSA-ET-WEB-FT-SF`
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const Register = ({token, setToken}) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async (e) => {
        e.preventDefault()
        try {
          const response = await fetch(
            `${BASE_URL}/users/register`, {
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
          if (result && result.data && result.data.token) {
            setToken(result.data.token);
            console.log(token);
            alert('thanks! now please log in')
            } else {
                alert(`Account exists, please login`)
            }
        } catch (err) {
          console.error(err);
        }
      }

      useEffect(() => {
        console.log("Register Token:", token);
        if (token) {
            navigate('/allproducts');
        }
    }, [token]);

    return (
        <>
        <h1>Register a New Account!</h1>
        <form onSubmit={registerUser}>
            <label>
                Username: <input onChange={(e)=>setUsername(e.target.value)} value={username}></input>
            </label>
            <label>
                Password: <input onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            </label>
            <button type="submit">Register!</button>
            <Link to = {'/login'}>
            <h4>Have an Account? Login Here</h4>
            </Link>
        </form>
        </>
    )
}

export default Register