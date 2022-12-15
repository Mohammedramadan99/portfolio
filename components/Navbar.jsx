import React from 'react'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { logout } from '../Redux/auth/authSlice'

export default function Navbar()
{ 
    const dispatch = useDispatch()

    const signOutHandler = () =>
    {
        // dispatch(logout())
    }


    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} >
                        <span className='Fname'> mohammed </span>
                        <span className='Lname'> ramadan </span>
                    </Link>

                </div>
                <ul className="links">
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={200}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true} offset={0} duration={500}>
                            services
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
                            portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            contact
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}