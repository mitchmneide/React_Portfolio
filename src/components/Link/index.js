import React, {useState} from "react";
import '../../index.css'

const Link = ({href, children}) => {
    const [isActive, setIsActive] = useState(false);
    const className = isActive ? 'navActive' : '';
    
    const onClick = (event) => {
        event.preventDefault();
        // update Url
        window.history.pushState({}, "", href);
        
        setIsActive(current => !current)
        
     
        
        // send to Routes that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent) ;
        
    };
    
    return (
        < a className={className} href= {href} onClick={onClick}  >
            {children}
        </a>
    );
};
export default Link;