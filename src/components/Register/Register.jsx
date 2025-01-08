import React, { useState } from 'react'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password} = formData
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
        <input type="text" name="name" value={name} placeholder="Name" onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="Email" onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register