import React, { useState } from "react";
import Current from "../CurrentWeather/Current";
import Styles from "./display.module.css";

const Display = () => {
  const [searchData, setSeachData] = useState("Lucknow");

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.search_bar}>
        <input
          type="text"
          placeholder="Search weather at location"
          onChange={(e) => setSeachData(e.target.value)}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => capitalize(searchData)}
        ></i>
      </div>
      <Current search={searchData} />
    </div>
  );
};

export default Display;
