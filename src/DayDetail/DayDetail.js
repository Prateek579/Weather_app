import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Style from "./dayDetail.module.css";
import Hour from "../HourlyWeather/Hour";

const DayDetail = () => {
  const [dayData, setDayData] = useState([]);
  const location = useLocation();

  const dayIndex = async () => {
    
    const newIndex = location.pathname.replace("/days/", "");

    try {
   
      let data = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=cedfb890691c458a834171442230709&q=Lucknow&days=10&aqi=no&alerts=no"
      );
      let result = await data.json();
      const detailHour = result.forecast.forecastday[newIndex];
      setDayData(detailHour);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dayIndex();
  }, []);

  useEffect(() => {
    
  }, [dayData]);


  return (
    <div className={Style.day_container}>
      {Array.isArray(dayData.hour) ? dayData.hour.map((item, id) => {
        return (
          <div className="hourly_cont" key={id}> 
            <Hour
              image={item.condition.icon}
              text={item.condition.text}
              time={item.time}
              temp={item.temp_c}
              rainChance={item.chance_of_rain}
            />
          </div>
        );
      }) : <p className={Style.loading}>Loading data....</p>}
    </div>
  );
};

export default DayDetail;


