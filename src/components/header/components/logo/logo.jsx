import { Link } from "react-router-dom";
import { Icon } from "../../../icon/icon";
import styled from "styled-components";

const LargText = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 18px;
`;
const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon size="60px" margin="10px" id="fa-code" />
    <div>
      <LargText>Блог</LargText>
      <SmallText>веб-разработчик</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -14px;
`;
