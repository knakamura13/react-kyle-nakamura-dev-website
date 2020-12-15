import React from 'react';

import RootStore from '../stores/RootStore';

/**
 *  A search bar for AI-type user interaction.
 *
 *  @returns {JSX.Element}
 */
const SearchBar = props => {
    // Instantiate a data store to manage queries and intents
    const AIStore = new RootStore.AIStore();

    const handleQueryChange = e => {
        // Raw text from the text field
        const query = e.target.value;

        // Infer the intent of the query
        AIStore.inferIntentForQuery(query).then(intent => {
            console.log(`New intent calculated: ${intent}`)
        });
    };

    return (
        <input
            className='component'
            id='search-bar'
            style={{ top: AIStore.hasIntent() ? '20%' : '50%' }} // position (top) changes when intent is set
            placeholder={props.placeholder}
            autoComplete='off'
            onChange={e => handleQueryChange(e)}
        />
    );
};

export default SearchBar;
