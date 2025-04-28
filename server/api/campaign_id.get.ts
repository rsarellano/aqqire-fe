import { eventHandler } from "h3"
import { useFetch } from "nuxt/app"

export default eventHandler(async (event) => {
  const query = getQuery(event)

  const id = btoa(process.env.CAMPAIGN_CLIENT_ID!)
  try {
    const getData = await $fetch(
      // Client ID
      `https://api.createsend.com/api/v3.3/clients/${id}/campaigns.json?sentFromDate=2020-01-01`,
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
    console.log(e)
    return {
      statusCode: 500,
      message: "failed to fetch data",
    }
  }
})
