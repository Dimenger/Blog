export const updatePost = async ({ id, imageUrl, title, content }) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        image_url: imageUrl,
        title,
        content,
      }),
    });
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};
