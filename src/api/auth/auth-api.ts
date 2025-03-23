import { axiosInstance } from "../../utils/axiosInterceptor";

export const authenticate = async (formData:object) => {
  const { data } = await axiosInstance.post("auth/login", formData);
  return data;
};
