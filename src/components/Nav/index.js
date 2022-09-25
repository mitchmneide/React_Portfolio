import React, {useState} from 'react'
 import Link from '../Link';
 import '../../index.css';
function Nav() {
    const about = '/about';
    const contact = '/contact';
    const portfolio = '/portfolio';

  const [isActive, setIsActive] = useState('');

   const clickEvent = (event,href) => {
    event.preventDefault();
    console.log('href='+ href);
    setIsActive(href)
    // update URl 
    window.history.pushState({}, '', href);
    console.log('nav link =' + href);
    setIsActive(href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
   }
    return (
        <nav>
            <ul className='flex-row'>
                <div className='mx-2'>
                    <Link href={about} clickEvent={clickEvent} className={(isActive === about)? 'navActive': ''} >
                        About
                    </Link>
                </div>
                <div className='mx-2'>
               <Link href={contact} clickEvent={clickEvent} className={(isActive === contact)? 'navActive': ''} >
                Contact</Link>
                </div>
                <div className='mx-2'>
                <Link href={portfolio} clickEvent={clickEvent}className={(isActive === portfolio)? 'navActive': ''}>
                Portfolio
                </Link>
                </div>
            </ul>
        </nav>
    );
}
export default Nav;