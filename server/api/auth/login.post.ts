import { createError, eventHandler, readBody } from "h3"
import { sign } from "jsonwebtoken"

const refreshTokens: Record<number, Record<string, any>> = {}

export default eventHandler(async (event) => {
  try {
    // Get ENV variables for JWT Secret
    const runtimeConfig = useRuntimeConfig()

    //@todo: enable token refresh (currently disabled via nuxtconfig)
    const expiresIn = 123132131231231
    const refreshToken =
      Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

    const data = await readBody(event)

    if (!data.username || !data.password) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid Credentials",
      })
    }

    const { username, password } = data
    const db_user = await loginDB({ username, password })

    // Check if theres a response
    if (!db_user) {
      throw createError({ statusCode: 403, statusMessage: "Unauthorized" })
    }

    // Check if there is user details if none throw an error
    if (!db_user.data) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid Credentials",
      })
    }

    //@todo: apply user role scope -@bhong
    const accessToken = sign(
      { ...db_user, scope: ["broker", "vendor"] },
      runtimeConfig.jwtSecret,
      {
        expiresIn,
      }
    )
    refreshTokens[refreshToken] = {
      accessToken,
      ...db_user,
    }

    return {
      token: {
        accessToken,
        refreshToken,
      },
    }
  } catch (error: any) {
    return {
      statusCode: error.statusCode,
      message: error.message,
    }
  }
})
