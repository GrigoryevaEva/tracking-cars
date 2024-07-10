import { API_URL } from "../constants";

class Api {
  async get(endpoint: string) {
    const url = `${API_URL}/${endpoint}`;
    const resp = await fetch(url);

    if (!resp.ok) {
      const message = `Api: An error has occured: ${resp.status}`;
      throw new Error(message);
    }

    const data = await resp.json()
    return data
  }
}

export const api = new Api()