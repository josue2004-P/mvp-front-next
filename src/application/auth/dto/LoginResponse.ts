// src/application/auth/dto/LoginResponse.ts
export interface LoginResponse {
  id: number;
  token: string;
  profiles: string[];
}