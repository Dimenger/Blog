import { getCurrentDate } from "../utils";

export const addPost = async ({ imageUrl, title, content }) => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        image_url: imageUrl,
        punlished_at: getCurrentDate(),
        title,
        content,
      }),
    });
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};
