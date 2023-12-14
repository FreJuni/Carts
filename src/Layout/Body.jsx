import React from 'react'
import { data } from '../components/Box'
import Carts from '../components/Carts'

const Body = () => {
  return (
    <section className='section-center'>
      <div className='carts-item-con'>
        {data.map((item) => {
            return <Carts key= {item.ID} item={item} />
        })}
      </div>
    </section>
  )
}

export default Body