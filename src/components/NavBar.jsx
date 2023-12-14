import React from 'react'
import { GlobalContent } from '../store/CartitemStore'

const NavBar = ({showHandler}) => {
  const {items,totalAmount} = GlobalContent();

  const totalCarts = items.reduce((currentValue,item) => {
    return currentValue + item.currentAmountNumber;
  },0)
  
  return (
    <nav className='nav-con'>
        <section className='section-center'>
            <div className='nav'>
                <h1>Shopping<span>Cart</span></h1>
                <button className='nav-btn' onClick={showHandler}>
                    Cart <span>({totalCarts})</span>
                </button>
            </div>
        </section>
    </nav>
  )
}

export default NavBar