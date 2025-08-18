import { axiosClient } from "./AxiosClient";
import { LoginDto } from "@/src/application/auth/dto/LoginDto";
import { RegisterDto } from "@/src/application/auth/dto/RegisterDto";

export async function loginRequest(data: LoginDto) {
  const response = await axiosClient.post("/auth", data);
  return response.data;
}

export async function registerRequest(data: RegisterDto) {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
}
