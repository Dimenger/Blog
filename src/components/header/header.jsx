import { Logo } from "./components/logo/logo";
import { ControlPanel } from "./components/control-panel/control-panel";
import styled from "styled-components";

const Discription = styled.div`
  font-style: italic;
  // text-align: right; /* Выравнивание текста по правому краю */
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Discription>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between; /* Разделение элементов */
  align-items: center; /* Центровка по вертикали */
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px -2px 17px #000;
`;
