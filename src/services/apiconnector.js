import axios from "axios";
import { toast } from "react-hot-toast";

export const axiosInstance=axios.create({});

axiosInstance.interceptors.response.use((response)=>response,
  (error)=>{
    if(error.response.status===400 && error.response.data.includes("pantry")){
      toast.error("Please enter valid Pantry Id");
    }
    if(error.response.status===400 && error.response.data.includes("basket") && !error.response.data.includes("pantry")){
        toast.error("Please enter valid Basket Key");
      }
    return Promise.reject(error);
  }
)   

export const apiConnector=(method, url, bodyData, headers, params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null
    });
}