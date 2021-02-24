import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./WeatherData.css";
const FormattedDate = require("../time/time_format.js");

export const WeatherData = ({
  city,
  country,
  temp,
  tempMax,
  tempMin,
  humidity,
  pressure,
  windDeg,
  windSpeed,
  weatherDes,
  weather,
}) => {
  return (
    <div className="weather-panel">
      <Row>
        <Col className="weather-city-col">
          <h2>
            {city} , {country}
          </h2>
          <small> {FormattedDate.HumanDate()}</small>
        </Col>
        <Col className="weather-temp-col">
          <h1> {temp}° </h1>
        </Col>
      </Row>
      <Row>
        <Col className="weather-col">
          <span>
            {" "}
            {weather}, {weatherDes}{" "}
          </span>
        </Col>
      </Row>
      <Container fluid className="weather-data">
        <Row>
          <Col>
            <span>
              humidity: {humidity} <i className="fas fa-thermometer-full"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>
              wind Speed: {windSpeed} <i className="fas fa-tachometer-alt"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>
              wind Deg: {windDeg} <i className="fas fa-exchange-alt"></i>
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="weather-min-max-temp-col">
            <small>
              {tempMax}°-{tempMin}°{" "}
            </small>
          </Col>
        </Row>
        <Row className="icons">
          <Col>
            <i className="fas fa-sun"></i>
          </Col>
          <Col>
            <i className="far fa-snowflake"></i>
          </Col>
          <Col>
            <i className="fas fa-cloud-sun-rain"></i>
          </Col>

          <Col>
            <i className="fas fa-cloud-showers-heavy"></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
