import { eventHandler, getRequestHeader } from "h3"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const config = useRuntimeConfig()


  try {
    const getData = await $fetch(
      `https://api.createsend.com/api/v3.3/campaigns/${query.id}/clicks.json`,
      {
        headers: {
          Authorization: "Basic " + btoa(config.campaignApiKey!),
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
