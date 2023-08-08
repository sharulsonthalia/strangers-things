//All Products Component

import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const COHORT_NAME = `2306-FSA-ET-WEB-FT-SF`
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_URL = `${BASE_URL}/posts`

const AllProducts = () => {

    const navigate = useNavigate()

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        try{
        const fetchAllPosts = async() => {
            const response = await fetch(POSTS_URL);
            const data = await response.json()
            const products = data.data.posts
            setAllPosts(products)
            console.log(products)
            
            }
            fetchAllPosts()
            } catch(err) {
                console.log(err)
            }
    }, [])

    const showSinglePost = (id) => {

        navigate(`/${id}`)
    }
  



    return (
        <>
            <Link to = {'/addnewproduct'}>
                <h4>Add a New Product!</h4>
            </Link>
        <h1>Product List</h1>
        {allPosts.map((post)=>
            <div key={post._id}>
                <h2>{post.title}</h2>
                <h3> Description: {post.description}</h3>
                <h4>Price: {post.price}</h4>
                <button className="detailsButton" onClick = {()=>showSinglePost(post._id)}>See Details</button>
                <button className="deleteButton">Delete</button>
                <br></br>
                <br></br>
            </div>
            
        )}
        </>
    )
}

export default AllProducts