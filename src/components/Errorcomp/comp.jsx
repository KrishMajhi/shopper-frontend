import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.css";
function Comp() {
  const err = useRouteError();
  console.log(err);
  return <div className="errdiv">error here</div>;
}

export default Comp;
  