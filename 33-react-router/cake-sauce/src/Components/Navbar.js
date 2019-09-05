import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>

            <Link to="/mvp">
                MVP
        </Link>
            <br />
            <Link to="/members">
                Members
        </Link>
            <br />
            <Link to="/home">
                Welcome
        </Link>
            <br />


        </div>)

}

export default Navbar