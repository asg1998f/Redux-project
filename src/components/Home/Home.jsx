import React from 'react';
import Posts from '../Posts/Posts';
import AddPosts from '../AddPosts/AddPosts';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="home__add-posts">
        <AddPosts />
      </div>
      <div className="home__posts">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
