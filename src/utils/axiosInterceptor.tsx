import Axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { getUser, removeUser } from "../utils/cookieHelper";
import { getBaseUrl, getDocUrl } from "./getBaseUrl";

const BASEURL = getBaseUrl();
export const DOC_URL = getDocUrl();

export const axiosInstance = Axios.create({
    baseURL: BASEURL,
    timeout: 20000,
});

axiosInstance.defaults.headers["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers["Accept"] = "*";
axiosInstance.defaults.headers["Access-Control-Allow-Headers"] = "Origin";
axiosInstance.defaults.headers["Access-Control-Allow-Method"] = "PUT,POST,GET,DELETE";
axiosInstance.defaults.headers["X-Powered-By"] = "Express";


// const checkIfExpired = (token) => {
//   if (token) {
//     const decode = jwtDecode(token);
//     const exp = decode.exp;

//     const iat = decode.iat;
//     const now = new Date();
//     if (now.getTime() > exp * 1000) {
//       return true;
//     }
//     if (now.getTime() < iat * 10 - 60000) {
//       alert("Wrong System Time \n Please correct your system time");
//       return true;
//     }
//     return false;
//   }
//   return true;
// };

// axiosInstance.interceptors.request.use(function (config) {
//   const data = getUser();
//   config.withCredentials = false;
//   if (data !== null) {
//     if (!checkIfExpired(data)) {
//       config.headers["Authorization"] = "Bearer " + data;
//     } else {
//       removeUser();
//       window.location.href("#/");
//     }
//   }
//   return config;
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     try {
//       const authDataString = localStorage.getItem("token");
//       const authData = JSON.parse(authDataString);
//       let token = authData;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );