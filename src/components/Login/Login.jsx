import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import './Login.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="login-form">
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
