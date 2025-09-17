import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//  1. add resume to the server using - POST, reqBody
export const addResumeApi = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/resumes`, reqBody);
};
