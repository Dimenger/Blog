import { Icon } from "../../../icon/icon";
import styled from "styled-components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  font-size: 18px;
  width: 100px;
  height: 30px;
`;

const ControlPanelConteiner = ({ className }) => {
  return (
    <div className={className}>
      <RightAligned>
        <Button type="button">Войти</Button>
      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" margin="10px 5px" />
        <Icon id="fa-file-text-o" margin="10px 5px" />
        <Icon id="fa-users" margin="10px 5px" />
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelConteiner)``;
