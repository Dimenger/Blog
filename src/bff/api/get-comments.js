import { transformComment } from "../transformers";

export const getComments = async (postId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/comments?post_id=${postId}`
    );
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const loadedComments = await response.json();

    return loadedComments.map(transformComment);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};
