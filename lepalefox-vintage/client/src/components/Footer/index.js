import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
       <header className='flex-row px-1' id='footer'>
        <h1>
            <Link to="/">
                <span role="img" aria-label="shopping bag">
                    🛍 
                </span>
            </Link>
        </h1>
       </header>
    )
}

export default Footer;