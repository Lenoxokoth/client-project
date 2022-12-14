import React, { useState } from "react"

const CollectionCard = ({ collectionItem, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }

  return (
    <>
        {collectionItem.map((collectionItem) => {
          return (
            <div className='box'>
              <div className='product'>
                <div className='image-collection'>
                  <img src={collectionItem.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{collectionItem.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${collectionItem.price}.00 </h4>
  
                    <button onClick={() => addToCart(collectionItem)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default CollectionCard