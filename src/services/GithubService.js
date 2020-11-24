import axios from "axios";
import { API_URL } from "../assets/CONST";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRepositories(page, perPage, sort) {
    const sortRepo = sort === "default" || sort === null ? "" : `sort=${sort}&`;
    return apiClient.get(
      `/search/repositories?q=${sortRepo}page=${page}&per_page=${perPage}`
    );
  },
};
