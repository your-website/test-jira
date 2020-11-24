import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRepositories(page, perPage) {
    return apiClient.get(
      `/search/repositories?q=page=${page}&per_page=${perPage}`
    );
  },
};
