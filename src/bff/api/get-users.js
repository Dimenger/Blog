import { transformUser } from "../transformers";

export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const users = await response.json();

    return users && users.map(transformUser);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};

/*
export const getUsers = () => {
  return fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => console.error("Ошибка загрузки:", error));
};
*/
