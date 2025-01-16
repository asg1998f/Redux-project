import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import './Header.scss'; 
import logo from '../../assets/Default_make_a_logo_for_a_social_media_web_that_its_an_orange_3_7888a809-8bdb-416c-adce-a2859b5f4970_0.png'

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] =useState("")
  const handleChange = (e) => {
    setText(e.target.value)
    if(e.key==="Enter") {
      console.log(text)
      navigate("/search/"+text)
    }
  }

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="My App Logo" className="logo-image" />
      </Link>
      <h1 className="title">Fun Fox</h1>
      <input onKeyUp={handleChange} placeholder='Search Post' name='text'className='search'/>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

