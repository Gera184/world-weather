import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Weather.css";
import { WeatherData } from "./WeatherData";

var API_KEY = "0d3b1b46104a89bfa439285f96d04523";

export const Weather = () => {
  var [query, setQuery] = useState("");
  var [weather, setWeather] = useState([]);

  var URL = `https://api.openweathermap.org/data/2.5/weather?q=${query.trim()},&appid=${API_KEY}`;

  function data() {
    axios
      .get(URL)
      .then((res) => {
        setWeather(res.data);
        console.log(weather);
        setQuery("");
      })
      .catch((err) => console.log(err));
  }

  const hundleOnSubmit = (e) => {
    e.preventDefault();
    data();
  };

  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/7b/dc/e7/7bdce75d64ba8f75d7b71b14b23e411e.jpg"
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />

      <Row>
        <Col className="category-inputc-col">
          <input
            type="text"
            placeholder=" City"
            className="category-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="search-col">
          <button className="search-btn" type="button" onClick={hundleOnSubmit}>
            Search
          </button>
        </Col>
      </Row>

      <Row>
        <Col className="WeatherData" md={{ span: 4, offset: 7 }}>
          <WeatherData
            key={weather.id}
            city={weather?.name}
            country={weather.sys?.country}
            temp={weather.main?.temp}
            tempMax={weather.main?.temp_max}
            tempMin={weather.main?.temp_min}
            humidity={weather.main?.humidity}
            windDeg={weather.wind?.deg}
            windSpeed={weather.wind?.speed}
            weatherDes={weather.weather ? weather.weather[0].description : ""}
            weather={weather.weather ? weather.weather[0].main : ""}
          />
        </Col>
      </Row>
    </div>
  );
};
