import React, { useState } from 'react'
import { GlobalContent } from '../store/CartitemStore'

const Carts = ({item}) => {
  const {addItemHandler} = GlobalContent();
  const [currentAmount,setCurrentAmount] = useState(1);
  const currentAmountNumber  = + currentAmount; // transform to number//

  const handler = () => {
    if(currentAmountNumber < 1 || currentAmountNumber > 5) {
      return
    }
    addItemHandler({...item,currentAmountNumber});
  }

  return (
    <article className='single-item'>
        <div className='single-info'>
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>$ {item.Price}</p>
        </div>
        <div className='single-btn'>
          <input type='number' value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)  } min={1}  max={5} ></input>
          <button className='add-btn' onClick={handler}>+Add</button>
        </div>
    </article>
  )
}

export default Carts