/**
 *  Performs an API request using the APU People Counter API.
 *
 *  @type {{get: (function(*=): Promise<unknown>)}}
 */
const APIRequest = {
    get: async url => {
        const myHeaders = new Headers();
        myHeaders.append(
            'Cookie',
            '79c53e13aed5ef54e4552707a3028beb=d259a71a23c71958624702b9ea297ce5'
        );

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        return fetch(url, requestOptions)
            .then(result => result.text())
            .catch(error => console.error(error));
    },
};

export default APIRequest;
