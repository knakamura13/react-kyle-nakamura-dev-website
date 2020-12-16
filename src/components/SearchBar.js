import React from 'react';
import { debounce } from 'lodash';
import { observer } from 'mobx-react-lite';

import RootStore from '../stores/RootStore';

/**
 *  A search bar for AI-type user interaction.
 *
 *  @returns {JSX.Element}
 */
const SearchBar = observer(props => {
    const { AIStore } = RootStore;

    const handleQueryChange = debounce(e => {
        // Raw text from the search bar
        const query = e.target.value;

        AIStore.infertIntentForQuery(query).catch(err => {
            console.log(err);
        });
    }, 500);

    return (
        <>
            <input
                className='component'
                id='search-bar'
                style={{ top: AIStore.hasIntent ? '25%' : '50%' }} // position (top) changes when intent is set
                placeholder={props.placeholder}
                autoComplete='off'
                onChange={e => handleQueryChange(e)}
            />
            {AIStore.hasIntent && (
                <div className='center'>
                    <label>{AIStore.getResponseForIntent(AIStore.intent)}</label>
                </div>
            )}
        </>
    );
});

export default SearchBar;
