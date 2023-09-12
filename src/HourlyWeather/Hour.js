import React from "react";
import Style from "./hour.module.css";

const Hour = ({ image, text, time, temp, rainChance }) => {
  return (
    <div className={Style.card}>
      <p>{temp} C</p>
      <div className={Style.img_cont}>
        <img src={image} alt="img" />
        <p>{rainChance}%</p>
      </div>

      <p>{text}</p>
      <p>{time}</p>
    </div>
  );
};

export default Hour;
