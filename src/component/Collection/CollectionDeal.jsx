import React from 'react'
import CollectionCard from './CollectionCard'
import  './Collection.css'

function CollectionDeal({collectionItem, addToCart}) {
  return (
    <>
    <section className='collection background'>
      <div className="container">
        <div className="heading f_flex">
          <h1>Shop</h1>
        </div>
        <div className="college">
        <CollectionCard collectionItem={collectionItem} addToCart={addToCart}/>
        </div>
      </div>
    </section>
    </>
  )
}

export default CollectionDeal