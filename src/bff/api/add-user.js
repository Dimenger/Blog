import { getCurrentDate } from "../utils";

export const addUser = async (login, password) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        login,
        password,
        registered_at: getCurrentDate(),
        role_id: 2,
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
