import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { AddPost } from '../../features/posts/postSlice';

const AddPosts = () => {
    const [formData, setFormData] = useState({
        title:'',
        content:''
    })
    const {title, content} = formData
    const dispatch = useDispatch()
   
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = async(e) => {
        e.preventDefault()
        await dispatch(AddPost(formData))
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="title" value={title} placeholder="Title" onChange={onChange} />
        <input type="text" name="content" value={content} placeholder="Content" onChange={onChange}/>
        <button type="submit">Add Post</button>
    </form>
  )
}

export default AddPosts