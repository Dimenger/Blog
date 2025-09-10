import { transformUser } from "../transformers";

export const getUser = async (loginToFind) =>
  fetch(`http://localhost:3000/users?login=${loginToFind}`)
    .then((response) => response.json())
    .then(([loadedUser]) => loadedUser && transformUser(loadedUser));
