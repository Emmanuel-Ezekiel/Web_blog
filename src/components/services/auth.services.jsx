import axios from "axios";

const API_URL = "https://demoapi.remis.ng";

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      console.log(response.data)
      return response.data;
    });
};


const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  getCurrentUser,
};

export default authService;