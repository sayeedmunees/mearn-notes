import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// register user using post, content type - application/json
export const registerAPI = async (reqBody) => {
  return await commonAPI(`POST`, `${serverURL}/register`, reqBody);
};

// login user using post, content type - application/json
export const loginAPI = async (reqBody) => {
  return await commonAPI(`POST`, `${serverURL}/login`, reqBody);
};

// google login
export const googleLoginAPI = async (reqBody) => {
  return await commonAPI(`POST`, `${serverURL}/google-login`, reqBody);
};
