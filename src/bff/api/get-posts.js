import { transformPosts } from "../transformers";

export const getPosts = (page, limit, searchPhrase) => {
  const encodedSearch = encodeURIComponent(searchPhrase);
  return fetch(
    `http://localhost:3000/posts?q=${encodedSearch}&_start=${
      (page - 1) * limit
    }&_limit=${limit}&_sort=id&_order=asc`
  )
    .then((response) => response.json())
    .then((loadedPosts) => loadedPosts && loadedPosts.map(transformPosts));
};
