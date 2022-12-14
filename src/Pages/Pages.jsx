import React from 'react'
import Flashdeals from '../component/Flashdeals/Flashdeals'
import Home from '../component/mainpage/Home'
import NewArrivals from '../component/newarrivals/NewArrivals'
import TopCate from '../component/top/TopCate'

const Pages = ({productItems, CartItem, addToCart}) => {
  return (
    <>
        <Home CartItem = {CartItem}/>
        <Flashdeals productItems = {productItems} addToCart = {addToCart}/>
        <TopCate/>
        <NewArrivals/>
    </>
  )
}

export default Pages