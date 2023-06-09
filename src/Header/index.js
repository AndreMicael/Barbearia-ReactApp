import React from 'react';
import "./Header.css"


function Header(props) {




    return ( 

            
            <section className='navbar-container'>
                <nav className='navbar'>
                <img className ="logo" src={props.logo} alt="Barber Shop Logo"/> 
                <div>
                    
                </div>
                </nav>            
            </section>
           
       

     );
}

export default Header;