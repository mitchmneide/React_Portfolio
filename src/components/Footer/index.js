import React from 'react';

function Footer() {
    return (
        <footer>
       
        <div>
            <ul className='flex-row'>
                <div className='mx-2 '>
                <li className='footerLi'>
                    < a href='https://github.com/mitchmneide'  target='_blank' rel='noreferrer'> Github</a>
                </li>
                </div>
                <li>
                    <a href='https://linkedin.com/in/mitchel-eide-7b5760238' target='_blank' rel='noreferrer' > Linkedin</a>
                </li>
            </ul>
            <div className='footer'>
            <h4 className='footerFont'>
                &copy; 2022 Mitchel Eide
            </h4>
        </div>
        </div>
        </footer>
    )
}
export default Footer;