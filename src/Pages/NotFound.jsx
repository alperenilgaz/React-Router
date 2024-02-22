import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
        <div className='not-found'>NotFound</div>
        <Link to='/'>Back to Home Page</Link>
    </>
  )
}

export default NotFound