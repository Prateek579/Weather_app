import React, { useEffect, useState } from "react";
import Styles from "./current.module.css";
import Hour from "../HourlyWeather/Hour";
import Furture from "../FutureWeather/Furture";

const Current = ({ search }) => {
  const [forcastDetail, setForcastDetail] = useState({
    location: [],
    current: [],
    tenDay: [],
    icon: "",
    text: "",
    date: "",
    sunrise: "",
    sunset: "",
    hourlyData: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      let detail = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=cedfb890691c458a834171442230709&q=${search}&days=10`
      );
      let data = await detail.json();
      setForcastDetail({
        location: data.location,
        current: data.current,
        icon: data.current.condition.icon,
        text: data.current.condition.text,
        tenDay: data.forecast.forecastday,
        date: data.forecast.forecastday[0].date,
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        hourlyData: data.forecast.forecastday[0].hour,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [search]);

  return (
    <>
      {loading ? (
        <p className={Styles.loading_Data}>Loading...</p>
      ) : (
        <>
          <div className={Styles.container_cont}>
            <div>
              <p className="text-2xl text-slate-50">
                {forcastDetail.location.name},{" "}
                {forcastDetail.location.localtime}
              </p>
              <div className={Styles.img_cont}>
                <img
                  className="w-20 mr-10"
                  src={forcastDetail.icon}
                  alt="weather image"
                />
                <h1 className="text-5xl text-slate-50">
                  {forcastDetail.current.temp_c}C
                </h1>
              </div>
              <p className="text-3xl text-slate-50 font-light">
                {forcastDetail.text}
              </p>
            </div>
            <div className={Styles.mid_cont}>
              <img
                src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
                alt="img"
              />
              <p>
                <i className="fa-solid fa-sun"></i> {forcastDetail.sunrise}
              </p>
              <p>
                <i className="fa-solid fa-moon"></i> {forcastDetail.sunset}
              </p>
            </div>
            <div className={Styles.remain_detail}>
              <p>
                <i className="fa-solid fa-droplet"></i> Humidity
                {forcastDetail.current.humidity}
              </p>
              <p>
                <i className="fa-solid fa-wind"></i>Wind{" "}
                {forcastDetail.current.wind_mph}kph
              </p>
              <p>
                <i className="fa-solid fa-location-arrow"></i>Wind direction
                {forcastDetail.current.wind_dir}
              </p>
            </div>
          </div>
          <div className={Styles.hourly_update}>
            {forcastDetail.hourlyData.map((item, id) => {
              return (
                <div key={id} className="hourly_cont">
                  <Hour
                    image={item.condition.icon}
                    text={item.condition.text}
                    time={item.time}
                    temp={item.temp_c}
                    rainChance={item.chance_of_rain}
                  />
                </div>
              );
            })}
          </div>
          <Furture daysData={forcastDetail.tenDay} />
        </>
      )}
    </>
  );
};

export default Current;
