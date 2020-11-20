import React, { useState, useEffect } from "react";

/****************
 Component Class
*****************/

const Home = () => {
    const [X, setX] = useState(0),
        [Y, setY] = useState(0),
        linkedInURL = 'https://linkedin.com/in/kylenakamura',
        gitHubURL = 'https://github.com/knakamura13';

    let offset = {
        transform: `translate(0, 0) perspective(600px)
                    rotateY(${X}deg)
                    rotateX(${Y}deg)`
    }

    useEffect(() => {
        // Set the friction, a.k.a. movement sensitivity
        const friction = 1 / 200;

        const mouseMove = (e) => {
            let followX = 600 - e.clientX,
                followY = 600 - e.clientY;

            let x = -followX * friction,
                y = followY * friction;

            setX(x);
            setY(y);
        }

        window.addEventListener('mousemove', mouseMove);

        // Returned function will be called on component unmount
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div className="component" id="home">
            <div className='wrapper' style={offset}>
                <div className="shape"/>
                <div className="shape2"></div>
            </div>

            <div id="nav-bar">
                <a className="engraved nav-item" href={gitHubURL} target="_blank">
                    Portfolio
                </a>

                <a className="engraved nav-item" href={linkedInURL} target="_blank">
                    About
                </a>

                <a className="engraved nav-item" href={linkedInURL} target="_blank">
                    Contact
                </a>
            </div>

            <p className="engraved center" id="home-message">
                {`This site is a work in progress. \n`}
                {`Check back later for more information about me!`}
            </p>
        </div>
    );
};
    
export default Home;
