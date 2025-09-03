import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../icon/icon";
import { Button } from "../../../button/button";
import styled from "styled-components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ControlPanelConteiner = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <Button>
          <Link to="/login">Войти</Link>{" "}
        </Button>
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 5px" />
        </StyledIcon>

        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 5px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" margin="10px 5px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelConteiner)``;
