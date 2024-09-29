import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <a href='/' className='logo'>Northern Utah Golf Association</a>
        <div className='header-right'>
            <a href='/' className='active'>Home</a>
            <a href='/'>Join</a>
        </div>
    </div>
  )
}

export default Header