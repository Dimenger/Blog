import { transformSession } from "../transformers";

export const getSession = async (hash) =>
  fetch(`http://localhost:3000/sessions?hash=${hash}`)
    .then((response) => response.json())
    .then(([loadedSesion]) => loadedSesion && transformSession(loadedSesion));
