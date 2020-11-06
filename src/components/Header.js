import React from "react";
import { FaBeer } from "react-icons/fa";

/****************
 Component Class
*****************/

/* A top-positioned header view with a logo and title */
const Header = (props) => (
    <div className="component" id="header">
        <div>
            <h3> Lets go for a <FaBeer />? </h3>

            {/* Page title */}
            <a href="/">
                {props.title}
            </a>
        </div>
    </div>
);

export default Header;
