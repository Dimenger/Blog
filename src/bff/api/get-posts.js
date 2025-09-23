import { transformPosts } from "../transformers";

export const getPosts = (page, limit) =>
  fetch(
    `http://localhost:3000/posts?_start=${
      (page - 1) * limit
    }&_limit=${limit}&_sort=id&_order=asc)`
  )
    .then((response) => response.json())
    .then((loadedPosts) => loadedPosts && loadedPosts.map(transformPosts));
