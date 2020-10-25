import React from "react";
import { useMediaQuery } from "react-responsive";
import { Tablet as Medium, Phone as Small } from "../constants/MediaSizes";

import Header from "./Header";
import logo from "../assets/logo-black.png";

import * as Styles from "../constants/Styles";

/*******************
 * Component Class *
 *******************/

const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: Medium.minWidth });
    return isNotMobile ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery(Small);
    return isMobile ? children : null;
};

const Home = () => (
    <div className="App">
        <Header title="Home > Portfolio > People Counter" />

        <div id="main" style={styles.body.main}>
            <Default>   
                <div style={styles.images.main}>
                    <div style={styles.imageContainer.main}>
                        <label>Before</label>
                        <img src={logo} alt="before"></img>
                    </div>
                    <div style={styles.imageContainer.main}>
                        <label>Before</label>
                        <img src={logo} alt="before"></img>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div style={{...styles.images.main, ...styles.images.small}}>
                    <div style={{...styles.imageContainer.main, ...styles.imageContainer.small}}>
                        <label>Before</label>
                        <img src={logo} alt="before"></img>
                    </div>
                    <div style={{...styles.imageContainer.main, ...styles.imageContainer.small}}>
                        <label>Before</label>
                        <img src={logo} alt="before"></img>
                    </div>
                </div>
            </Mobile>
        </div>
    </div>
);

export default Home;

/*************
 Local Styles
**************/

const styles = {
    body: {
        main: {
            height: "100%",
            width: "100%",
            margin: "30px 0 0 10px",
            backgroundColor: Styles.colors.background,
            fontFamily: Styles.fontFamilies.primary
        },
        small: {
        }
    },
    images: {
        main: {
            flex: 1,
        },
        small: {
            flexDirection: 'row',
        }
    },
    imageContainer: {
        main: {
            flex: 1,
        },
        small: {
            flexDirection: 'row',
        }
    }

};
