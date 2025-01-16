import './App.css'
import Register from './components/Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import PostDetail from './components/PostDetail/PostDetail'
import Search from './components/Search/Search'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/postDetail/:_id" element={<PostDetail/>} />
      <Route path="/search/:title" element={<Search/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
