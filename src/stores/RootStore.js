// Import all other stores
import AIStore from './AIStore';

/**
 * 	RootStore
 * 	A store that stores all stores.
 */
class RootStore {
    // Instantiate each store
    AIStore = new AIStore();
}

// Export the store
export default new RootStore();
