import axios from "axios";

const LOGIN_URL = "/api/user/login";
const GET_GOALS = "/api/goals";
const POST_GOALS = "/api/goals";
const DELETE_GOALS = `/api/goals/`;

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(
  (request) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));

    request.headers.Authorization = `Bearer ${token}`;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));

    response.headers.Authorization = `Bearer ${token}`;

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (data) => {
  const response = await axios.post(LOGIN_URL, data);
  return response.data;
};

export const getGoals = async () => {
  const response = await axios.get(GET_GOALS);
  return response.data;
};

export const postGoal = async (data) => {
  const response = await axios.post(POST_GOALS, data);
  return response.data;
};
export const deleteGoal = async (data) => {
  const response = await axios.delete(DELETE_GOALS, data);
  return response.data;
};
