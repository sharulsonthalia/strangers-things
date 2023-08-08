//App.jsx

import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import { Route, Routes, Link } from 'react-router-dom'
import Register from './components/RegisterUser'
import Login from './components/Login'
import AddNewProduct from './components/AddNewProduct'
const App = () => {

  const [token, setToken] = useState("")
  console.log(token)

  return (
    <>
    <Routes>
      <Route path='/' element = {<Login token = {token} setToken = {setToken} />} />
      <Route path='/register' element = {<Register token = {token} setToken = {setToken} />} />
      <Route path='/addnewproduct' element={<AddNewProduct token = {token} />} />
      <Route path='/allproducts' element={<AllProducts />} />
      <Route path='/:postID' element={<SingleProduct />} />

    </Routes>

    </>
  )
}

export default App
