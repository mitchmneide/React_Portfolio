import React from "react";

const Link = ({className, href, children}) => {
    const onClick = (event) => {
        event.preventDefault();
        // update Url
        window.history.pushState({}, "", href);

        // send to Routes that URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        < a className={className} href= {href} onClick={onClick}>
            {children}
        </a>
    );
};
export default Link;