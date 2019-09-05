import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{height: '10vh', display: 'flex', flexDirection: 'row', fontSize: '28px'}}>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/">
          Welcome
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/mvp">
          MVP
        </Link>
      </div>
      <div style={{height: '30px', margin: '20px'}}>
        <Link to="/members">
          Members
        </Link>
      </div>
    </div>
  )
}

export default Navbar