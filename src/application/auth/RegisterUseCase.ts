import { registerRequest } from "@/src/infrastructure/api/AuthApi";

interface RegisterInput {
  email: string;
  password: string;
}

export class RegisterUseCase {
  async execute(input: RegisterInput) {
    try {
      const result = await registerRequest(input);
      return result;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Error al registrar usuario");
    }
  }
}
