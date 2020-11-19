import React from "react";
import { FaLessThan } from "react-icons/fa";

/****************
 Component Class
*****************/

/* A top-positioned header view with a logo and title */
const Header = (props) => (
    <div className="component" id="header">
        {/* Back button */}
        <FaLessThan class="fa-icon"/>

        {/* Page title */}
        <a href="/">
            {props.title}
        </a>
    </div>
);

export default Header;
