// src/infrastructure/api/AxiosClient.ts
import axios from "axios";
import { getSubdomain } from "@/utils/getSubdomain";

const subdomain = getSubdomain();

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 
    "Content-Type": "application/json",
    "X-Subdomain": subdomain || "",
  },
  withCredentials: true,
});