import React from "react";
import '../../index.css'

const Link = ({href, className,clickEvent, children}) => {
    console.log('nav-link =' + href);
    console.log('classname =' + className);
    // const onClick = (event) => {
    //     event.preventDefault();
    //     // update Url
    //     window.history.pushState({}, "", href);
        
    //     setIsActive(current => !current)
        
     
        
    //     // send to Routes that URL has changed
    //     const navEvent = new PopStateEvent('popstate');
    //     window.dispatchEvent(navEvent) ;
        // Moved this too Nav thanks to frosemund from askBCS
    // };
    
    return (
        < a href= {href} className={className} onClick={(event) => clickEvent(event,href)}  >
            {children}
        </a>
    );
};
export default Link;