import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </p>
    </div>
  );
}
