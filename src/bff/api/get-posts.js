import { transformPosts } from "../transformers";

export const getPosts = (page, limit, searchPhrase) =>
  fetch(
    `http://localhost:3000/posts?title_like=${searchPhrase}&_start=${
      (page - 1) * limit
    }&_limit=${limit}&_sort=id&_order=asc`
  )
    .then((response) => response.json())
    .then((loadedPosts) => loadedPosts && loadedPosts.map(transformPosts));
