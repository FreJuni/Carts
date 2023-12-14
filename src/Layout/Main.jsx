import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Backdrop from '../components/Backdrop'

const Main = () => {

  const [showCart,setShowCart] = useState(false);

  const showHandler = () => {
    setShowCart(true);
  }

  const hideHandler = () => {
    setShowCart(false);
  }


  return (
    <>
     <Header showHandler={showHandler} />
     <Body />
     <Backdrop showCart={showCart} hideHandler={hideHandler} />
    </>
  )
}

export default Main