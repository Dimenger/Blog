import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const FooterConteiner = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Samara&units=metric&lang=ru&appid=dc1933397cff7f37396116b80f036432"
    )
      .then((response) => response.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp * 10) / 10);
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <>
      <div className={className}>
        <div>
          {" "}
          <div>Блог веб-разработчика</div>
          <div>web@developer.ru</div>
        </div>

        <div>
          {" "}
          <div>
            {city} : {new Date().toLocaleDateString("ru")}
          </div>
          <div>{temperature} градусов</div>
          <div>{weather}</div>
        </div>
      </div>
    </>
  );
};

export const Footer = styled(FooterConteiner)`
  display: flex;
  justify-content: space-between; /* Разделение элементов */
  align-items: center; /* Центровка по вертикали */
  font-weight: bold;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px -2px 17px #000;
`;
