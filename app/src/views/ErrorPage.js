import "./ErrorPage.css";
import { Link } from "react-router-dom";

function error() {
  return (
    <div className="ErrorPage">
      <h1>Weather Forecast</h1>
      <p>Looks like there was a problem.</p>
      <Link to="/">
        <button className="ErrorBtn">Try Again</button>
      </Link>
    </div>
  );
}

export default error;
