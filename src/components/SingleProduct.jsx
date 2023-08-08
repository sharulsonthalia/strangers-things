//Single Product Component
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const COHORT_NAME = `2306-FSA-ET-WEB-FT-SF`
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_URL = `${BASE_URL}/posts`

const SingleProduct = () => {

    const navigate = useNavigate()
    const { postID } = useParams()
    console.log(postID)
    const [post, setPost] = useState({})

    const backButton = () => {
        navigate('/')
    }

    useEffect(() => {
        try{
        const fetchAllPosts = async() => {
            const response = await fetch(POSTS_URL);
            const data = await response.json()
            const posts = data.data.posts
            const selectedPost = posts.find(post => post._id === postID )
            console.log(selectedPost)
            setPost(selectedPost)
            }
            fetchAllPosts()
            } catch(err) {
                console.log(err)
            }
    }, [])

    return (
        <>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <h3>Price: {post.price}</h3>
        <h3>Delivery: {post.willDeliver ? "Will be delivered" : "Won't be delivered"}</h3>

        <button onClick={() => {backButton()}}>Go Back</button>
        <button>Delete</button>
        </>
    )
}

export default SingleProduct