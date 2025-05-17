import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500">404 Not Found</h1>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
