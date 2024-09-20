import { createError } from "h3";
import { useRuntimeConfig } from "#imports";

type User = {
  username: string
  password: string
}

export default async function ({ username, password }: User) {
  try {
    const config = useRuntimeConfig();
    const apiUrl = config.public.API_BASE_URL;
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if (response.status === 401) {
      return createError({
        statusCode: 401,
        statusMessage: "Unauthorized" 
      })
    }

    return response.json()

  } catch (error: any) {
    console.error("Error in logindb", error);
    return createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error.message,
    });
  }
}
