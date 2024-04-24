"use server"

import { loginService } from "@/services/auth.service";
import { registerService } from "@/services/registerService"

export const registerAction = async (data) => {
  const res = await registerService(data)
  console.log("res", res);
  return res
}

