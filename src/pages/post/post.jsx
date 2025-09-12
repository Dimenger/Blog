import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { H2 } from "../../components/h2/h2";
import { PostContent } from "./post-content/post-content";
import { Comments } from "./comments/comments";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../action/load-post-async";
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
      <div>{post.title}</div>
      <PostContent post={post} />
      <Comments comments={post.comments} />

      <H2></H2>
    </div>
  );
};

export const Post = styled(PostContainer)``;
