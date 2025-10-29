import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// register user using post, content type - application/json
export const registerAPI = async (reqBody) => {
  console.log(reqBody);

  return await commonAPI(`POST`, `${serverURL}/register`, reqBody);
};


// login user using post, content type - application/json
export const loginAPI = async (reqBody) => {
  console.log(reqBody);

  return await commonAPI(`POST`, `${serverURL}/login`, reqBody);
};
