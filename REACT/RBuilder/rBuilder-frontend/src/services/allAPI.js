import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//  1. add resume to the server using - POST, reqBody
export const addResumeAPI = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/resumes`, reqBody);
};

//  2. add resume history to the server using - POST, reqBody
export const addHistoryAPI = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/history`, reqBody);
};

//  3. add resume history to the server using - GET
export const getHistoryAPI = async () => {
  return await commonAPI("get", `${serverURL}/history`,"");
};