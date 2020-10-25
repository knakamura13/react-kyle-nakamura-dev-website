import { Link } from "react-router-dom";

import Header from "./Header";

/****************
 Component Class
*****************/

const Error = () => (
  <div>
    <Header title="Page Not Found" />

      <div>
        <label>Try changing the url path to "/home" instead.</label>
        <Link to="/">Take me there</Link>
      </div>
  </div>
);

export default Error;
