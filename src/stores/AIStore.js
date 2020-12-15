// Import packages
import { makeAutoObservable, computed, action } from 'mobx';

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

    getIntent = async () => {
        if (this.hasIntent) {
            // Use the cached token
            return this.intent;
        }

        // Infer the intent using Wit.ai
        // const response = await HomeAPI.fetchNewToken(userId);
        const response = {
            data: {
                intent: 'Introduction',
            },
        };

        const newIntent = response.data.intent;
        this.setIntent(newIntent);
        return newIntent;
    };
}

// Export the store
export default AIStore;
