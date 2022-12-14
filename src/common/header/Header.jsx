import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'


const Header = ({CartItem}) => {
  return (
    <>
    <Search CartItem={CartItem}/>
    <Navbar/>
    </>
  )
}

export default Header