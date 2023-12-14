import React from 'react'
import Card from './Card'

const Backdrop = ({showCart,hideHandler}) => {
  return (
    <>
      {
        showCart && (
          <>
            <section className='backdrop' onClick={hideHandler}></section>
            <Card hideHandler={hideHandler} />   
          </>

          )
      }
    </>
   
  )
}

export default Backdrop