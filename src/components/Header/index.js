import React from 'react';
import Nav from '../Nav'
function Header() {
    
    return (
        <div className='flex-row px-1'>
            <h1>
                <a href ="/"> Mitchel Eide </a>
            </h1>
          <Nav></Nav>

        </div>
    )
}
export default Header;