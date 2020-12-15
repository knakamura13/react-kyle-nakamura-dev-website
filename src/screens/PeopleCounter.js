import React, { useState } from 'react';

import { Header } from '../components';
import logo from '../assets/logo-black.png';

import { APIRequest } from '../utils';

/*******************
 * Component Class *
 *******************/

const PeopleCounter = () => {
    const [people, setPeople] = useState(0),
        [beforeImg, setBeforeImg] = useState(''),
        [afterImg, setAfterImg] = useState('');

    APIRequest.get('https://api-cameras-psmbl.cloudapps.ose.apu.edu/')
        .then(res => JSON.parse(res))
        .then(json => json.result)
        .then(result => {
            if (!people) {
                // Update the state only once
                setPeople(result.people);

                // TODO: Next step is to update the Flask app to respond with image data
                setBeforeImg(result.image);
                setAfterImg(result.image);
            }
        })
        .catch(err => {});

    return (
        <div id='main'>
            <Header title='Home > Portfolio > People Counter' />

            <div>
                <div>
                    <label>Before</label>
                    <img src={logo} alt='before'></img>
                    <label>{beforeImg || 'BEFORE IMG'}</label>
                </div>
                <div>
                    <label>After</label>
                    <img src={logo} alt='after'></img>
                    <label>{afterImg || 'AFTER IMG'}</label>
                </div>

                <div>
                    <label>{people}</label>
                </div>
            </div>
        </div>
    );
};

export default PeopleCounter;
