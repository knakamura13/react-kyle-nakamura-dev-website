import Header from "./Header";

import logo from "../assets/logo-black.png";

/*******************
 * Component Class *
 *******************/

const PeopleCounter = () => (
    <div id="main">
        <Header title="Home > Portfolio > People Counter" />

        <div>
            <div>
                <label>Before</label>
                <img src={logo} alt="before"></img>
            </div>
            <div>
                <label>After</label>
                <img src={logo} alt="after"></img>
            </div>
        </div>
    </div>
);

export default PeopleCounter;
