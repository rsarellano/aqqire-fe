import { createError, eventHandler, readBody } from 'h3'
import { sign } from 'jsonwebtoken'

const refreshTokens: Record<number, Record<string, any>> = {}
//@todo: implement longer token using jsonwebtoken - utilized in user.get.ts to use the same token
export const SECRET = 'www3secretJWTtokon123'

export default eventHandler(async (event) => {
  const data = await readBody(event)
  const { username, password } = data  
  // console.log(username, password)

  //@todo: integrate with database login - bhongong@
  // db_user = loginDB(username, password)
  // if (!db_user) {
  //   throw createError({ statusCode: 403, statusMessage: 'Unauthorized' })
  // }
  
  //@todo: enable token refresh (currently disabled via nuxtconfig) 
  // const expiresIn = 15
  const expiresIn = 60
  const refreshToken = Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
  const user = {
    id: '12343',
    username,
    picture: 'https://picsum.photos/200/300?grayscale',
    email: username,
    name: 'User ' + username,
    role: 'Broker' 
  }
  
  //@todo: apply user role scope -@bhong
  const accessToken = sign({ ...user, scope: ['broker', 'vendor'] }, SECRET, { expiresIn })
  refreshTokens[refreshToken] = {
    accessToken,
    user
  }

  return {
    token: {
      accessToken,
      refreshToken
    }
  }
})
