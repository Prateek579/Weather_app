import React from "react";
import Style from './future.module.css'
import { Link } from "react-router-dom";

const Furture = ({daysData}) => {

  return (
    <div className={Style.days_cont}>
      {daysData.map((item, id) => {
        return (
         <Link to={"days/"+id} key={id}> 
          <div className={Style.future_card}>
            <h4>{item.date}</h4>
            <img src={item.day.condition.icon} alt="sun" />
            <div className="sun_detail">
              <p>
                <i className="fa-solid fa-sun"></i>
                {item.astro.sunrise}
              </p>
              <p>
                <i className="fa-solid fa-moon"></i>
                {item.astro.sunset}
              </p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Furture;
