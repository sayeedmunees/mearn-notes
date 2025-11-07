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

// get home books
// google login
export const homeBookAPI = async () => {
  return await commonAPI(`GET`, `${serverURL}/all-home-book`);
};


// ------------------Users---------------------------------

// upload book
export const uploadBookAPI = async (reqBody, reqHeader) => {
  return await commonAPI(`POST`, `${serverURL}/add-book`, reqBody, reqHeader);
};