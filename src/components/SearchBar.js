import React from 'react';

import RootStore from '../stores/RootStore';

/**
 *  A search bar for AI-type user interaction.
 *
 *  @returns {JSX.Element}
 */
const SearchBar = props => {
    // TODO: Use MobX
    const { AIStore } = RootStore;

    AIStore.getIntent().then((intent) => {
        console.log(intent);
    })

    const handleQueryChange = e => {
        // Raw text from the text field
        const query = e.target.value;

        // Infer the intent of the query
        // TODO: Use wit.ai to infer the intent
        if (query.includes('your name')) {
            // TODO: Use MobX to store the intent
            //AIStore.setIntent('Introduction');
        }
    };

    return (
        <input
            className='component'
            id='search-bar'
            // TODO: Use MobX `AIStore.intent` instead of `true`/`false`
            style={{ top: true ? '20%' : '50%' }} // position (top) changes when intent is set
            placeholder={props.placeholder}
            autoComplete='off'
            onChange={e => handleQueryChange(e)}
        />
    );
};

export default SearchBar;
