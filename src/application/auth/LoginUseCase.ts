// src/application/auth/LoginUseCase.ts
import { axiosClient } from "@/src/infrastructure/api/AxiosClient";
import { LoginDto } from "./dto/LoginDto";
import { LoginResponse } from "./dto/LoginResponse";

export class LoginUseCase {
  async execute(data: LoginDto): Promise<LoginResponse> {
    try {
      const { data: response } = await axiosClient.post<LoginResponse>("/auth", data, {
        withCredentials: true,
      });
      return response;
    } catch (error: any) {
      throw error?.response?.data?.msg || "Error al iniciar sesión";
    }
  }
}
