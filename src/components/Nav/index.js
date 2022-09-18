import React from 'react'
 import Link from '../Link';
function Nav() {
   
   
    return (
        <nav>
            <ul className='flex-row'>
                <div className='mx-2'>
                    <Link href="/about" className="item">
                        About
                    </Link>
                </div>
               <Link href="/contact" className="item">
                contact</Link>
                
            </ul>
        </nav>
    );
}
export default Nav;