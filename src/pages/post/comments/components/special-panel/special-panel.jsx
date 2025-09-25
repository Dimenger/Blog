import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  CLOSE_MODAL,
  removePostAsync,
} from "../../../../../actions";

import { useServerRequest } from "../../../../../hooks";
import { Icon } from "../../../../../components/icon/icon";
import { checkAccess } from "../../../../../utils";
import { ROLE } from "../../../../../constants";

import { selectUserRole } from "../../../../../selectors";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SpecialPanelContainer = ({ id, className, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() =>
            navigate("/")
          );
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  const isAdmin = checkAccess([ROLE.ADMIN], userRole);

  return (
    <div className={className}>
      <div className="pablished-at">
        {publishedAt && (
          <Icon id="fa-calendar-o" margin="0 10px 0 10px" onClick={() => {}} />
        )}
        {publishedAt}
      </div>
      {isAdmin && (
        <div className="buttons">
          {editButton}
          {publishedAt && (
            <Icon
              id="fa-trash-o"
              margin="0 10px 0 10px"
              onClick={() => onPostRemove(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${(margin) => margin};
  font-size: 18px;

  & .buttons {
    display: flex;
  }

  & .i {
    position: relative;
    top: -1px;
  }

  & .pablished-at {
    display: flex;
    font-size: 18px;
  }
`;
