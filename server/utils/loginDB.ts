import { createError } from "h3"

type User = {
  username: string
  password: string
}

export default async function ({ username, password }: User) {
  try {
    // TODO change to ENV
    const db_user = await fetch("https://api3.aqqire.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const data = await db_user.json()
    return data
  } catch (error: any) {
    return { ...error }
  }
}
