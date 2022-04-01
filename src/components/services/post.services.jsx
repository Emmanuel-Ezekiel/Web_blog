import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://demoapi.remis.ng";
const companyId = "96f583d7-7395-412d-bb7c-5f6747ab479b"
const DriverId = "81804c84-9600-452c-ac41-0c416be5631a"



const getAllDriver = () => {
  return axios.get(API_URL + `/Drivers/All?count=true&companyId=${companyId}`, { headers: authHeader() });
};

const getDriver = () => {
  return axios.get(API_URL + `/Driver/Details/${DriverId}`, { headers: authHeader() });
};

const postDriver = (companyId,userId,name,phone,email,address,city,state,roles) => {
  return axios.post(API_URL + `/Driver/Add/${companyId}`,{
     companyId,userId,name,phone,email,address,city,state,roles
    }, { headers: authHeader() });
};

const putDriver = () => {
  return axios.put(API_URL + `/Driver/Details/${DriverId}`, { headers: authHeader() });
};

// const getAllPrivatePosts = () => {
//   return axios.get(API_URL + "/private", { headers: authHeader() });
// };

const postService = {
  getAllDriver,
  getDriver,
  postDriver,
//   getAllPrivatePosts,
};

export default postService;

