import React, { useState } from "react";

const Alert = ({ props }) => {
  let alertColor = "";

  if (props === "Value Changed" || props === "Item Added to the List") {
    alertColor = "alertsGreen";
  } else {
    alertColor = "alertsRed";
  }

  return <div className={alertColor}>{props}</div>;
};

export default Alert;
