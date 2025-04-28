import { eventHandler, getRequestHeader } from "h3"
import { clicks, opens } from "~/types/campaign"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  console.log(query.id)

  try {
    let data: clicks[] = []
    let hasMoreData = true
    let page = 1

    const opens = await $fetch<{ data: opens[]; total: number }>(
      "/api/campaign_open?id=" + query.id
    )
    while (hasMoreData) {
      const getData = await $fetch<{ Results: clicks[] }>(
        `https://api.createsend.com/api/v3.3/campaigns/${query.id}/clicks.json`,
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
      totalOpens: opens.data.length,
      totalClicks: data.length,
      clicks: data,
      opens: opens.data,
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
