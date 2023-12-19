import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <h1>404 Page Not Found</h1>
      <div className="return-back">
        <h2>
          Return to homepage &gt;&#160;
          <Link to="/"> Homepage</Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
