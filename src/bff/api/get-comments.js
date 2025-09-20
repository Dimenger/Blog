import { transformComment } from "../transformers";

const ALL_COMENTS_URL = "http://localhost:3000/comments";
const POST_COMENTS_URL = "http://localhost:3000/comments?post_id=";

export const getComments = async (postId) => {
  try {
    const url =
      postId === undefined ? ALL_COMENTS_URL : POST_COMENTS_URL + postId;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const loadedComments = await response.json();

    return loadedComments.map(transformComment);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};
