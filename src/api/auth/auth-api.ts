import { axiosInstance } from "../../utils/axiosInterceptor";

export const authenticate = async (formData) => {
  const { data } = await axiosInstance.post("auth/login", formData);
  return data;
};
