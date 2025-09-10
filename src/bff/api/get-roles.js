export const getRoles = async () => {
  try {
    const response = await fetch("http://localhost:3000/roles");
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};
