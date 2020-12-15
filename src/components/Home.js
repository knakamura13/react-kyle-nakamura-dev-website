import React, { useRef } from 'react';

import SearchBar from './SearchBar';
import NavBar from './NavBar';

/****************
 Component Class
*****************/

/**
 *  The home screen component.
 *
 *  @returns {JSX.Element}
 */
const Home = () => {
    // TODO: Use MobX value instead of hardcoded intent.
    const hardCodedIntent = '';

    // TODO: Set the response from the MobX AI store.
    const hardCodedResponse = 'This is the chat bot response';

    const messageRef = useRef(null);

    return (
        <div className='component' id='home'>
            <NavBar />

            <SearchBar placeholder='Ask me anything . . .' />
            {hardCodedIntent ? (
                <p className='center' id='chat-bot-message' ref={messageRef}>
                    {hardCodedResponse}
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Home;
