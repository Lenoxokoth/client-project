import React, {useState} from 'react';
import './App.css';
import Header from './common/header/Header'
import Pages from './Pages/Pages'
import Cart from './common/Cart/Cart'
import Sdata from './component/mainpage/Sdata';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Data from './component/Flashdeals/Data';
import Contact from './component/contact/Contact';
import CollectionDeal from './component/Collection/CollectionDeal';
import Cdata from './component/Collection/Cdata';

function App() {
  const {collectionItem} = Cdata
  // discount
  const {productItems} = Data


  const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([])

  
  const addToCart = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)
    
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {
    
    const productExit = CartItem.find((item) => item.id === product.id)

  
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
     
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
    return (
    <>
    <Router>
      <Header CartItem={CartItem} />
      <Switch>
      <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/Cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route path='/Contact'>
            <Contact/>
          </Route>

          <Route path='/Collection' exact>
            <CollectionDeal collectionItem ={collectionItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>
      </Switch>
      </Router>
    
    </>
  );
}

export default App;
