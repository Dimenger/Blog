import { transformPost } from "../transformers";

export const getPost = async (postId) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((response) => response.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
