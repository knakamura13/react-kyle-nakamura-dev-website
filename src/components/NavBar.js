import React from 'react';

/**
 *  Horizontal nav bar for home page site navigation.
 *
 *  @returns {JSX.Element}
 */
const NavBar = () => {
    const linkedInURL = 'https://linkedin.com/in/kylenakamura',
        gitHubURL = 'https://github.com/knakamura13';

    return (
        <div id='nav-bar'>
            <NavItem url={gitHubURL} text='Portfolio' />
            <NavItem url={linkedInURL} text='About' />
            <NavItem url={linkedInURL} text='Contact' />
        </div>
    );
};

/**
 *  A single navigation item for use in the NavBar component.
 *
 *  @param props
 *  @returns {JSX.Element}
 */
const NavItem = props => {
    return (
        <a className='engraved nav-item' href={props.url} target='_blank'>
            {props.text}
        </a>
    );
};

export default NavBar;
