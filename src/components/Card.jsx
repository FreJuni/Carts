import React from 'react'
import { GlobalContent } from '../store/CartitemStore'


const Card = ({hideHandler}) => {
  const {items,totalAmount,addItemHandler,removeItemHandler} = GlobalContent();

  const total= `$ ${totalAmount.toFixed(2)}`;

  const addHandler = (item) => {
    addItemHandler({...item,currentAmountNumber : 1});
  }
  const removeHandler = (item) => {
    removeItemHandler(item.ID);
  }

  return (
    <>
    <section className='cart-item'>
      <div className='overflow-con'>
        <h2>Here are your carts.</h2>
        {
          items.length < 1? (<h1>No items yet.</h1>) : (
            <>
             {items.map((item) => {
             return (
            <article key={item.ID} className='single-item'>
            <div className='single-info'>
                <h3>{item.Name}</h3>
                <p>$ {item.Price}</p>
            </div>
            <div className='single-btn'>
            <p>x <span>{item.currentAmountNumber}</span></p>
            <div className='btn-container'>
              <button className='btn-ctr' onClick={() =>addHandler(item)}>+</button>
              <button className='btn-ctr' onClick={() => removeHandler(item)}>-</button>
            </div>
            </div>
          </article>
            )
        })}
            </>
          )
        }
        <hr />
        <div className='total-con'>
            <h2>Total Price</h2>
            <p>{total}</p>
        </div>
        <div className='btn-con'>
            <button className='close-btn' onClick={hideHandler}>Close</button>
            {
              items.length > 0 &&  <button className='order-btn'>Order</button>
            }
           
        </div>
      </div>
    </section> 
    </>
  )
}

export default Card