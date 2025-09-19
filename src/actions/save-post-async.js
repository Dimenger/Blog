import { setPostData } from "../actions";

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
  requestServer("savePost", newPostData).then((updatedPost) =>
    dispatch(setPostData(updatedPost.res))
  );
