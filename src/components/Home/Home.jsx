import React from 'react'
import Posts from '../Posts/Posts'
import AddPosts from '../AddPosts/AddPosts'

const Home = () => {
  return (
    <div>Home
      <AddPosts/>
        <Posts/>
    </div>
  )
}

export default Home