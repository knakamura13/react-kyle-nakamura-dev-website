import React, { useState, useEffect } from "react";

import { Header } from "../components";

/****************
 Component Class
*****************/

const Home = () => {
    const [X, setX] = useState(0),
        [Y, setY] = useState(0);

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
            <Header title="hello"></Header>
        </div>
    );
};
    
export default Home;
