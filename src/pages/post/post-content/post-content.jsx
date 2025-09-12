import { H2 } from "../../../components/h2/h2";
import { Icon } from "../../../components/icon/icon";

import styled from "styled-components";

const PostContentContainer = ({
  className,
  post: { title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl || null} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="pablished-at">
          <Icon id="fa-calendar-o" margin="0 10px 0 10px" onClick={() => {}} />
          {publishedAt}
        </div>
        <div className="buttons">
          <Icon
            id="fa-pencil-square-o"
            margin="0 10px 0 10px"
            onClick={() => {}}
          />
          <Icon id="fa-trash-o" margin="0 10px 0 10px" onClick={() => {}} />
        </div>
      </div>

      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }

  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: -20px 0 20px;
    font-size: 18px;
  }

  & .pablished-at {
    display: flex;
    font-size: 18px;
  }

  & .i {
    position: relative;
    top: -1px;
  }

  & .buttons {
    display: flex;
    font-size: 18px;
  }
`;
