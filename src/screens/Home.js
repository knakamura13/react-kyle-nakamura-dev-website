import React, { useRef } from 'react';

import { SearchBar, NavBar } from '../components';

import RootStore from '../stores/RootStore';

/****************
 Component Class
*****************/

/**
 *  The home screen component.
 *
 *  @returns {JSX.Element}
 */
const Home = async () => {
    // Instantiate a data store to manage queries and intents
    const AIStore = RootStore.AIStore;

    const hardCodedResponse = AIStore.getResponseForIntent(AIStore.intent);

    const messageRef = useRef(null);

    return (
        <div className='component' id='home'>
            <NavBar />

            <SearchBar placeholder='Ask me anything . . .' />
            {AIStore.hasIntent ? (
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
