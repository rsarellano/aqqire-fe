import { eventHandler, getRequestHeader } from "h3"

export default eventHandler(async (event) => {
  const query = getQuery(event)

  const clientId = process.env.CAMPAIGN_CLIENT_ID
  try {
    const getData = await $fetch(
      `https://api.createsend.com/api/v3.3/clients/${clientId}/campaigns.json`,
      {
        headers: {
          Authorization: "Basic " + btoa(process.env.CAMPAIGN_API_KEY!),
        },
        query: {
          pagesize: query.page || 25,
          page: query.page || 1,
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
