// src/application/auth/RenewTokenUseCase.ts
import { axiosClient } from "@/src/infrastructure/api/AxiosClient";
import { LoginResponse } from "./dto/LoginResponse";
import Cookies from "js-cookie";

export class RenewTokenUseCase {
  async execute(): Promise<LoginResponse> {
    try {
      // Obtener token de cookie (si existe)
      const token = Cookies.get("token") || "";

      const { data } = await axiosClient.get<LoginResponse>("/auth/renew", {
        headers: {
          "x-token": token,
        },
      });

      return data;
    } catch (error: any) {
      throw error?.response?.data?.msg || "Token inválido o expirado";
    }
  }
}
