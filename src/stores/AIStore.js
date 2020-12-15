// Import packages
import axios from 'axios';
import { makeAutoObservable, computed, action, useEffect } from 'mobx';

/**
 * 	AIStore
 */
class AIStore {
    // Observable properties
    intent = null;

    constructor() {
        makeAutoObservable(this, {
            hasIntent: computed,
            setIntent: action,
        });
    }

    // Computed values
    get hasIntent() {
        return this.intent !== null;
    }

    // Actions
    setIntent(newIntent) {
        this.intent = newIntent;
    }

    inferIntentForQuery = async (query) => {
        const version = '20201215',
            bearer = 'UPOEBI4NSSUDXCOW5PETBKYTMSL72AGS';

        const config = {
            method: 'GET',
            url: `https://api.wit.ai/message?v=${version}&q=${query}`,
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        };

        const intent = await axios(config)
            .then(res => JSON.parse(res.data))
            .then(data => {
                if (data.intents) {
                    return data.intents[0].name;
                }
                return null;
            })
            .catch(err => {
                console.log(err);
            });

        this.setIntent(intent);
        return intent;
    };

    getResponseForIntent = (intent) => {
        let res = '';

        if (!intent) return res;

        switch (intent.toLowerCase()) {
            case 'introduction':
                res = `My name is Kyle Nakamura. Pleasure to meet you!`;
                break;
        }

        return res;
    }
}

// Export the store
export default AIStore;
