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
export const homeBookAPI = async () => {
  return await commonAPI(`GET`, `${serverURL}/all-home-book`);
};

// ------------------Users---------------------------------

// upload book
export const uploadBookAPI = async (reqBody, reqHeader) => {
  return await commonAPI(`POST`, `${serverURL}/add-book`, reqBody, reqHeader);
};

// get All books
export const allBookAPI = async (searchKey, reqHeader) => {
  return await commonAPI(
    `GET`,
    `${serverURL}/all-book?search=${searchKey}`,
    "",
    reqHeader
  );
};

// get a view book
export const viewBookAPI = async (id) => {
  return await commonAPI(`GET`, `${serverURL}/view-book/${id}`);
};

// api to update user profile
export const updateUserProfileAPI = async (reqBody, reqHeader) => {
  console.log(reqBody);
  return await commonAPI(
    `PUT`,
    `${serverURL}/user-profile-update`,
    reqBody,
    reqHeader
  );
};

// get All user books
export const getAllUserBooksAPI = async (reqHeader) => {
  return await commonAPI(`GET`, `${serverURL}/user-books`, "", reqHeader);
};
// get All user brought books
export const getAllUserBroughtBooksAPI = async (reqHeader) => {
  return await commonAPI(
    `GET`,
    `${serverURL}/user-brought-books`,
    "",
    reqHeader
  );
};

// delete a user book
export const deleteUserBooksAPI = async (id) => {
  return await commonAPI(`DELETE`, `${serverURL}/delete-user-books/${id}`);
};

//------------admin--------
// api to get all book-admin
export const allBookAdminAPI = async (reqHeader) => {
  return await commonAPI(`GET`, `${serverURL}/admin-all-books`, "", reqHeader);
};

export const approveBookAPI = async (reqBody, reqHeader) => {
  return await commonAPI(
    `PUT`,
    `${serverURL}/approve-book`,
    reqBody,
    reqHeader
  );
};

// api to get all users
export const getAllUsersAPI = async (reqHeader) => {
  return await commonAPI(`GET`, `${serverURL}/all-users`, " ", reqHeader);
};

// api to update admin profile
export const updateProfileAPI = async (reqBody, reqHeader) => {
  console.log(reqBody);
  return await commonAPI(
    `PUT`,
    `${serverURL}/profile-update`,
    reqBody,
    reqHeader
  );
};
