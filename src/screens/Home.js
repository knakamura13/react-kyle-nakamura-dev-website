import React from 'react';

import { SearchBar, NavBar, HeaderName } from '../components';

/****************
 Component Class
*****************/

/**
 *  The home screen component.
 *
 *  @returns {JSX.Element}
 */
const Home = () => {
    return (
        <div className='component' id='home'>
            <HeaderName />

            <NavBar />

            <SearchBar placeholder='Ask me anything . . .' />
        </div>
    );
};

export default Home;
