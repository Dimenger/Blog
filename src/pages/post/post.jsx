import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { H2 } from "../../components/h2/h2";
import { PostContent } from "./post-content/post-content";
import { Comments } from "./comments/comments";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions/load-post-async";
import { selectPost } from "../../selectors";

import styled from "styled-components";

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, requestServer, params.id]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />

      <H2></H2>
    </div>
  );
};

export const Post = styled(PostContainer)`
  margin: 40px 0;
  padding: 40px 80px;
`;
