import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <>

           <header className='header'>

                <h2 className='title'>S<span>up</span>er-<span>11</span></h2>

                <nav>
                    <li>Home</li>
                    <li>About</li>
                    <li>Selected</li>
                    <li>Contact</li>
                </nav>

           </header>

        </>
    );
};

export default Header;