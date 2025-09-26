import { getCurrentDate } from "../utils";

export const addComment = async (userId, postId, content) =>
  fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      author_id: userId,
      post_id: postId,
      published_at: getCurrentDate(),
      content,
    }),
  });
