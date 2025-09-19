import { Icon } from "../../../../../components/icon/icon";

import styled from "styled-components";

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
  return (
    <div className={className}>
      <div className="pablished-at">
        <Icon id="fa-calendar-o" margin="0 10px 0 10px" onClick={() => {}} />
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        <Icon id="fa-trash-o" margin="0 10px 0 10px" onClick={() => {}} />
      </div>
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
