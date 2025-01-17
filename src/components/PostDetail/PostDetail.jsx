import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../features/posts/postSlice'

const PostDetail = () => {
    const {_id}= useParams()

    const {post}= useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getById(_id))
    },[])
  return (
    <div>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
        <p>Likes: {post.likes?.length}</p>
    </div>
  )
}

export default PostDetail