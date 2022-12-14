import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const Flashdeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
          <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt="discount"/>
            <h1>Discounts</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default Flashdeals