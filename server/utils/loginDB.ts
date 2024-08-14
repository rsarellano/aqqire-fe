import { createError } from "h3"

type User = {
  username: string
  password: string
}

export default async function ({ username, password }: User) {
  try {
    // TODO change to ENV
    const response = await fetch("https://api3.aqqire.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if(response.status === 401) {
      return createError({ 
        statusCode: 401, 
        statusMessage: "Unauthorized" 
      })
    }

    return response.json()

  } catch (error: any) {
    console.error('Error in logindb', error)
    return { ...error }
  }
}
