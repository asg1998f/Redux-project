import React, { useState } from 'react'
const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData',formData)
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} placeholder="email" onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder="password" onChange={onChange}/>
        <button type="submit">Login</button>
    </form>
  )
}
export default Login