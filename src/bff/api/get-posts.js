import { transformPosts } from "../transformers";

export const getPosts = () =>
  fetch("http://localhost:3000/posts/")
    .then((response) => response.json())
    .then((loadedPosts) => loadedPosts && loadedPosts.map(transformPosts));
