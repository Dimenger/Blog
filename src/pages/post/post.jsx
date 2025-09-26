import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useParams } from "react-router-dom";

import { PostContent } from "./post-content/post-content";
import { Comments } from "./comments/comments";
import { PostForm } from "./comments/components/post-form/post-form";
import { useServerRequest } from "../../hooks";
import { loadPostAsync, RESET_POST_DATA } from "../../actions";
import { Error } from "../../components/error/error";
import { selectPost } from "../../selectors";
import { PrivateContent } from "../../components/private-content/private-content";
import { ROLE } from "../../constants";

import styled from "styled-components";
import { useState } from "react";

const PostContainer = ({ className }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isEditing = !!useMatch("/post/:id/edit");
  const isCreating = !!useMatch("/post");
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
      setError(postData.error);
      setIsLoading(false);
    });
  }, [dispatch, requestServer, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  const SpecificPostPage =
    isEditing || isCreating ? (
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
    ) : (
      <div className={className}>
        <PostContent post={post} />
        && <Comments comments={post.comments} postId={post.id} />
      </div>
    );

  return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
  margin: 40px 0;
  padding: 40px 80px;
`;
