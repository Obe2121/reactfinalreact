import {create} from "apisauce";
import base64 from "base-64";

const apiClient = (email, password) => create(
  {
    baseURL: "https:",
    headers:{
    Authorization: "Basic " +base64.code(email+":"+password)
  }
 }
);

export default apiClient