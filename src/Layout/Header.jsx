import React from 'react'
import NavBar from '../components/NavBar'
import Summary from '../components/Summary'

const Header = ({showHandler}) => {
  return (
    <>
        <NavBar showHandler={showHandler} />
        <Summary />
    </>
  )
}

export default Header