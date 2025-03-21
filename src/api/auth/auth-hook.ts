import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { authenticate } from "./auth-api";

// Define the structure of the form data
interface LoginFormData {
  mobileNumber: string;
  password: string;
}

// Define the API response type (adjust based on actual response)
interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

// Hook for authentication
export const useAuthHook = (): UseMutationResult<AuthResponse, Error, { formData: LoginFormData }> => {
  return useMutation({
    mutationKey: ["login"], // Identifies this mutation
    mutationFn: async ({ formData }): Promise<AuthResponse> => {
      try {
        const response = await authenticate(formData);
        return response.data;
      } catch (error: any) {
        throw new Error(error?.response?.data?.message || "An error occurred during login");
      }
    },
    onSuccess: (data) => {
      console.log("Login Successful", data);
      // toast.success("Login Successful");
    },
    onError: (err) => {
      console.error("Login Error:", err.message);
      // toast.error(err.message);
    },
  });
};
