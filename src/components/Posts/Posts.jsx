import { useEffect } from "react"
import Post from "../Post/Post"
import { useDispatch } from "react-redux"
import { getAll } from "../../features/posts/postSlice"

const Posts = () => {
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getAll())
    },[])
    return (
      <div>
        Posts
        <Post/>
        </div>
    )
  }
  
  export default Posts