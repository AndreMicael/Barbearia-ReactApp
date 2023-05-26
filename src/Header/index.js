import React from 'react';
import Logo from '../img/barbearia-logo.png'
import darkMode from '../img/moon.png'
import "./Header.css"

function Header() {
    return ( 

            <section className='navbar-container'>
                <nav className='navbar'>
                <img className ="logo" src={Logo}/> 
                <div className='mode-box'>
                    <div className='mode-button'>
                        <img className='mode-img' src={darkMode}/>
                        <p>Dark</p>
                    </div>
                </div>
                </nav>
            </section>

     );
}

export default Header;