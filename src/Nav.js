import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <div className='Nav'>
      <Link to="/">Home |</Link>{' '}
      <Link to="/about">Exercise 1 |</Link>{' '}
      <Link to="/contact">Exercise 2 </Link>{' '}
    </div>
  )
}
