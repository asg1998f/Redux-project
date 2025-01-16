import React, { useEffect, useState } from 'react'
import { register } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd'
const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        birthday:''
    })
    const {name,email,password,birthday,password2} = formData
    const dispatch = useDispatch()
    const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
    }
    if(isError){
      notification.error({
        message: "Error",
        description: message,
      })
    }
  }, [isSuccess, isError]);

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            return notification.error({
              message: "Error",
              description: "Passwords do not match",
            });
          } else {
              return dispatch(register(formData));
          }
      
    }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} placeholder="Name" onChange={onChange} />
        <input type="email" name="email" value={email} placeholder="Email" onChange={onChange}/>
        <input type="password" name="password" value={password} placeholder="Password" onChange={onChange}/>
        <input type="password" name="password2" value={password2} placeholder="Password 2" onChange={onChange}/>
        <input type="date" name="birthday" value={birthday} placeholder="Birthday" onChange={onChange}/>
        <button type="submit">Register</button>
    </form>
  )
}
export default Register