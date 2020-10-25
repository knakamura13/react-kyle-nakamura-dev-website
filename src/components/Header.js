import logo from "../assets/logo-white.png";

/****************
 Component Class
*****************/

/* A top-positioned header view with a logo and title */
const Header = () => (
    <div className="component" id="header">
        <div>
            {/* Logo */}
            <a href="/">
                <img src={logo} alt="Logo"/>
            </a>

            {/* Page title */}
            <a href="/">
                {this.props.title}
            </a>
        </div>
    </div>
);

export default Header;
