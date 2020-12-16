// Import packages
import { makeAutoObservable, observable, computed, action } from 'mobx';

/**
 * 	AIStore
 */
class AIStore {
    // Observable properties
    intent = null;
    latestIntent = null;
    latestQuery = null;
    latestResponse = null;

    constructor() {
        makeAutoObservable(this, {
            hasIntent: computed,
            setIntent: action,
            infertIntentForQuery: action,
            getResponseForIntent: action,
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

    infertIntentForQuery = async query => {
        if (!query) return null;

        // Cache the latest query
        this.latestQuery = query;

        // TODO: Infer the intent using Wit.ai
        if (query.includes('your name')) {
            this.intent = 'Introduction';
        } else {
            this.intent = null;
        }

        // Cache the latest intent
        if (this.intent) this.latestIntent = this.intent;

        return this.intent;
    };

    getResponseForIntent = intent => {
        let res = '';

        if (!intent) return res;

        switch (intent.toLowerCase()) {
            case 'introduction':
                res = 'My name is Kyle Nakamura. Pleasure to meet you!';
                break;
        }

        // Cache the latest response
        if (res)
            this.latestResponse = res;

        return res;
    };
}

// Export the store
export default AIStore;
