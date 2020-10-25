import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
//import MediaSizes from "../constants/MediaSizes";

import Header from "./Header";
import * as Styles from "../constants/Styles";

/*******************
 * Component Class *
 *******************/

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
};
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
};
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
};

const Home = () => (
    <div className="App">
        <Header title="Home > Portfolio > People Counter" />

        <div id="main" style={styles.body.main}>
            <Default>Desktop or Tablet</Default>
            <Mobile>Mobile</Mobile>
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
        large: {},
        medium: {},
        small: {}
    }
};
