// Import packages
import axios from 'axios';
import { makeAutoObservable, computed, action } from 'mobx';

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
        // Cache the latest query
        this.latestQuery = query;

        this.intent = (await witAIRequest(query)) || null;

        // Cache the latest intent
        if (this.intent) this.latestIntent = this.intent;

        return this.intent;
    };

    getResponseForIntent = intent => {
        let res = '';

        if (!intent) return res;

        switch (intent.toLowerCase()) {
            case 'education':
                res =
                    `I graduated from Azusa Pacific University (APU) in 2018 \n` +
                    `with a bachelor's degree in Computer Science and a minor in Mathematics.`;
                break;
            case 'fun_fact':
                res = `My favorite hobby is rock climbing! I like to boulder at Planet Granite gyms whenever possible.`;
                break;
            case 'hobbies':
                res = `My favorite hobbies are rock climbing, photography, watching movies, and occasionally some PS4.`;
                break;
            case 'introduction':
                res = 'My name is Kyle Nakamura. Pleasure to meet you!';
                break;
            case 'my_resume':
                res = `You can find my resume on my LinkedIn profile using the 'About' link on the top of this page.`;
                break;
            case 'personal_info':
                res =
                    `I am originally from the Los Angeles area, \n` +
                    `but moved to the S.F. Bay Area right after I graduated in 2018.`;
                break;
            case 'programming_skills':
                res =
                    `My favorite programming languages are Swift and JavaScript, \n` +
                    `but I am very comfortable with all of the following languages, frameworks, and tools: \n` +
                    `JavaScript, React, React-Native, HTML, CSS, PHP, Python, SQL, Swift, Java, C#, Vim, Git, Jest (for JS Testing).`;
                break;
            case 'tutorial':
                res =
                    `Ask me any question and I'll answer to the best of my ability! \n` +
                    `You can ask about things like: \n` +
                    `work \n` +
                    `school \n` +
                    `hobbies \n` +
                    `personal information \n` +
                    `fun facts about myself \n` +
                    `programming languages and skills`;
                break;
            case 'website_info':
                res =
                    `This website was built from scratch using React for the front-end and Node.JS + MobX for the back-end.\n` +
                    `The AI/chat bot features are made possible using wit.ai, a minimalistic tool for extracting intent from a text query.\n` +
                    `The site itself is hosted on Heroku and the code can be found on my GitHub profile using the 'Portfolio' link on the top of this page.`;
                break;
            case 'work':
                res = `After I graduated from APU in 2018, I started working full-time at APU as a full-stack software developer.`;
                break;
            case 'fallback':
            default:
                res = `Sorry, I didn't get that. Try asking something else!`;
                break;
        }

        // Cache the latest response
        if (res) this.latestResponse = res;

        return res;
    };
}

// Helper functions (private)

const witAIRequest = async query => {
    if (!query) return;

    const version = '20201215',
        bearer = process.env.REACT_APP_WIT_AI_BEARER;

    const config = {
        method: 'GET',
        url: `https://api.wit.ai/message?v=${version}&q=${query}`,
        headers: {
            Authorization: `Bearer ${bearer}`,
        },
    };

    return await axios(config)
        .then(res => res.data)
        .then(data => {
            if (data.intents) {
                return data.intents[0].name;
            }
        })
        .catch(err => {
            console.log(err);
        });
};

// Export the store
export default AIStore;
