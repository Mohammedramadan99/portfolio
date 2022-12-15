import React from 'react'
import { Link } from 'react-scroll'

export default function Footer()
{
    return (
        <footer className="footer"  >
            <div className="container" >
                <div className="logo">
                    <Link to="/">
                        <span className='Fname'> mohammed </span>
                        <span className='Lname'>ramadan</span>
                    </Link>
                </div>
                <ul className="links">
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}