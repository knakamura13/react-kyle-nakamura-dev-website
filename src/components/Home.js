import { useState, useEffect } from "react";

/****************
 Component Class
*****************/

const Home = () => {
    const [X, setX] = useState(""),
        [Y, setY] = useState('');

    let offset = {
        transform: `translate(-50%, -50%) perspective(600px)
                    rotateY(${X}deg)
                    rotateX(${Y}deg)`
    }

    useEffect(() => {
        const friction = 1/32;

        const mouseMove = (e) => {
            let followX = window.innerWidth / 2 - e.clientX;
            let followY = window.innerHeight / 2 - e.clientY;

            let x = -followX * friction;
            let y = followY * friction;

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
                <div className="shape"></div>
                <div className="shape2"><p>A website by Kyle Nakamura</p></div>
                <p>new website, who dis?</p>
            </div>
        </div>
    );
};
    
export default Home;
