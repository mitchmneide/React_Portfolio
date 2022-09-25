import React from 'react'
 import Link from '../Link';
 import '../../index.css';
function Nav() {
  
   
    return (
        <nav>
            <ul className='flex-row'>
                <div className='mx-2'>
                    <Link href="/about" >
                        About
                    </Link>
                </div>
                <div className='mx-2'>
               <Link href="/contact" >
                Contact</Link>
                </div>
                <div className='mx-2'>
                <Link href="/portfolio">
                Portfolio
                </Link>
                </div>
            </ul>
        </nav>
    );
}
export default Nav;