import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // return an instance of axios
  // create function allows us to pass in a configuration object containing authorization header
  return axios.create({
    baseURL: "http://localhost:3300/api",
    headers: {
      Authorization: token
    }
  });
};
