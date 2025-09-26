import { transformPost } from "../transformers";

export const getPost = async (postId) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      const error =
        response.status === 404
          ? "Такая страница не существует "
          : "Что-то пошло не так";

      if (response.status === 404) {
        return Promise.reject(error);
      }
      return Promise.reject;
    })
    .then((response) => response.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
