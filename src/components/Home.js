import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Header from "./Header";
import { Desktop, Tablet, Phone } from "../constants/MediaSizes";
import * as Styles from "../constants/Styles";

/******************
 * Component Class *
 *******************/

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Header title="Kyle Nakamura Dev" />

                <MediaQuery
                    minWidth={Desktop.minWidth}
                    maxWidth={Desktop.maxWidth}
                >
                    <div style={{ ...styles.body.main, ...styles.body.large }}>
                        <label>Home screen contents (big)</label>
                    </div>
                </MediaQuery>

                <MediaQuery
                    minWidth={Tablet.minWidth}
                    maxWidth={Tablet.maxWidth}
                >
                    <div style={{ ...styles.body.main, ...styles.body.medium }}>
                        <label>Home screen contents (regular)</label>
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={Phone.minWidth} maxWidth={Phone.maxWidth}>
                    <div style={{ ...styles.body.main, ...styles.body.small }}>
                        <label>Home screen contents (small)</label>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

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
