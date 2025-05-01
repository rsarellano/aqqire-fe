import { eventHandler } from "h3"
import { useFetch } from "nuxt/app"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  try {
    const getData = await $fetch(
      `https://api.createsend.com/api/v3.3/lists/${query.id}/active.json`,
      {
        headers: {
          Authorization: "Basic " + btoa(process.env.CAMPAIGN_API_KEY!),
        },
      }
    )

    setResponseStatus(event, 200)
    return {
      status: "OK",
      data: getData,
    }
  } catch (e) {
    setResponseStatus(event, 500)
    return {
      statusCode: 500,
      message: "failed to fetch data",
    }
  }
})
