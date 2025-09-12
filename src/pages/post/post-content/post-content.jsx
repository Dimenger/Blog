import { H2 } from "../../../components/h2/h2";

import styled from "styled-components";

const PostContentContainer = ({
  className,
  post: { title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl || null} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">{publishedAt}</div>
      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  display: flex;
`;
