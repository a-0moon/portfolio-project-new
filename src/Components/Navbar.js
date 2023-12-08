

import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi'

const Navbar = () => {


    /* navigation bar */
    const navigationItems = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];


    // button for responsive navbar
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }


    return (
        <nav className={`navigation-bar `}>
            <div className={`navigation-items ${toggleIcon ? "active" : ''}`}>
                {navigationItems

                    .map((item) => (
                        <a href={`#${item.toLowerCase()}`} key={item}>
                            {item}
                        </a>
                    ))}
            </div>


            <div className='nav-icon' onClick={handleToggleIcon}>
                {
                    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                }
            </div>
        </nav>
    );
};

export default Navbar;