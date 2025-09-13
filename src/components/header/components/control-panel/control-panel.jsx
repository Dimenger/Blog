import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../../../icon/icon";
import { Button } from "../../../button/button";
import { ROLE } from "../../../../constants";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions/logout";

import styled from "styled-components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const ControlPanelConteiner = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <Icon
              id="fa-sign-out"
              margin="10px 5px"
              onClick={() => dispatch(logout(session))}
            />
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" margin="10px 5px" onClick={() => navigate(-1)} />
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
