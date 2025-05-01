import { eventHandler, getRequestHeader } from "h3"
import type { opens } from "~/types/campaign"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const { id } = query

  try {
    let data: opens[] = []
    let hasMoreData = true
    let page = 1

    while (hasMoreData) {
      const getData = await $fetch<{ Results: opens[] }>(
        `https://api.createsend.com/api/v3.3/campaigns/${id}/opens.json`,
        {
          headers: {
            Authorization: "Basic " + btoa(process.env.CAMPAIGN_API_KEY!),
          },
          query: {
            pagesize: 1000,
            page: page,
          },
        }
      )
      data = [...data, ...getData.Results]
      page++

      if (getData.Results.length < 1000) {
        hasMoreData = false
      }
    }

    setResponseStatus(event, 200)
    return {
      status: "OK",
      data,
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
