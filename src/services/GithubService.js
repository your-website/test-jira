import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com/search/repositories?q=page=1&per_page=3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRepositories() {
    return apiClient.get();
  },
};
