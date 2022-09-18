import React from "react";


const Alert = ({alert,text}) => {
  return <div className={`alert alert-${alert}`}>{text}</div>;
};

export default Alert;
