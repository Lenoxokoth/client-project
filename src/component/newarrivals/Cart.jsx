import React from "react"
import NewData from './NewData'

const Cart = () => {
  return (
  
      <div className='content grid product'>
        {NewData.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          )
        })}
        </div>
  )
}

export default Cart