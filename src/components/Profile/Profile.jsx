import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.scss';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="profile">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
