import React from "react";
import { useRouteError, Link } from "react-router-dom";
import "./error.css";
function Comp() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errdiv">
      <h1>Something went wrong</h1>
      <p>The page you're looking for hit a snag.</p>
      <Link to="/" className="err-home">← Back to Home</Link>
    </div>
  );
}
export default Comp;
