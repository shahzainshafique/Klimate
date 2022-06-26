import React from "react";
import "../css/section2.css";
import icon from "../assets/icon.png";
import { useState } from "react";
import axios from "axios";
const Section2 = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1303a032ffce8fb79d9e84c4678f2289`;
  const searchLocation = (event) => {
    event.preventDefault();
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#12d8fa"
          fillOpacity="1"
          d="M0,320L60,309.3C120,299,240,277,360,261.3C480,245,600,235,720,218.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="sec2">
        <div className="content">
          <h2>Let's find out the weather at your place!</h2>
          <div className="search">
            <input
              type="text"
              className="locinp"
              value={location}
              onChange={handleChange}
              placeholder="Enter your location..."
            />
            <button onClick={searchLocation} className="searchloc">
              <img src={icon} alt="icon" />
            </button>
          </div>
          {data.name !== undefined && (
            <>
              <div className="city">
                <h3>{data.name}</h3>
                {data.main ? <h1>{data.main.temp} °F</h1> : null}
                {data.main ? <h4>{data.weather[0].main}</h4> : null}
              </div>
              <div className="desc">
                <div className="feels">
                  <p className="bold">Feels Like</p>
                  {data.main ? <p>{data.main.feels_like} °F</p> : null}
                </div>
                <div className="humidity">
                  <p className="bold">Humidity</p>
                  {data.main ? <p>{data.main.humidity}%</p> : null}
                </div>
                <div className="pressure">
                  <p className="bold">Pressure</p>
                  {data.main ? <p>{data.main.pressure} HPa</p> : null}
                </div>
              </div>
            </>
          )}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#12d8fa"
            fillOpacity="1"
            d="M0,64L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Section2;
