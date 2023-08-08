import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const COHORT_NAME = `2306-FSA-ET-WEB-FT-SF`
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_URL = `${BASE_URL}/posts`

const AddNewProduct = ({token}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")
    const [delivery, setDelivery] = useState(false)

    useEffect(() => {
        console.log("Token in AddNewProduct:", token);
     }, [token]);

    const handleSubmit = async () => {

        try {
          const response = await fetch(POSTS_URL, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: delivery
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
        
      }
    return (
        <>
        <Link to = {'/allproducts'}>
            <h4>Go Back</h4>
        </Link>
        <h1>Add a New Product!</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Title: <input 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title}></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Description:<input 
                onChange={(e)=>setDescription(e.target.value)} 
                value={description}></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Price:<input 
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                ></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Location:<input onChange={(e)=>setLocation(e.target.value)}
                value={location}
                ></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Delivery:
                <label>
                    Yes <input 
                     type="radio" 
                     value={true} 
                     checked={delivery === true} 
                     onChange={() => setDelivery(true)}
                    />
                </label>
                <label>
                    No <input 
                     type="radio" 
                     value={false} 
                     checked={delivery === false} 
                     onChange={() => setDelivery(false)}
                    />
                </label>
            </label>
            <br></br>
            <br></br>
            <button type="submit">Add a New Product</button>
        </form>
        </>
    )
}

export default AddNewProduct