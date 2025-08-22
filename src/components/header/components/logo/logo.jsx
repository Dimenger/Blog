import { Icon } from "../../../icon/icon";
import styled from "styled-components";

const LargText = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 8px;
`;
const SmallText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <div className={className}>
    <Icon size="60px" margin="10px" id="fa-code" />
    <div>
      <LargText>Блог</LargText>
      <SmallText>веб-разработчик</SmallText>
    </div>
  </div>
);

export const Logo = styled(LogoContainer)`
  display: flex;
`;
