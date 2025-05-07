import { eventHandler, getRequestHeader } from "h3"
import type { clicks, propertyClicks } from "~/types/campaign";
import { opens } from "~/types/campaign"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const config = useRuntimeConfig()

  try {
    let hasMoreData = true
    let page = 1
    const propertyClicks: propertyClicks[] = []
    const miscClicks: clicks[] = []

    while (hasMoreData) {
      const getData = await $fetch<{ Results: clicks[] }>(
        `https://api.createsend.com/api/v3.3/campaigns/${query.id}/clicks.json`,
        {
          headers: {
            Authorization: "Basic " + btoa(config.campaignApiKey!),
          },
          query: {
            pagesize: 1000,
            page: page,
          },
        }
      )

      getData.Results.forEach((item: clicks) => {
        if (item.URL.startsWith("https://www.aqqire.com/property/")) {
          const splitUrl = item.URL.split("/")
          let propertyName: string
          let propertyID: string

          if (/^\d+$/.test(splitUrl[splitUrl.length - 1])) {
            propertyName = splitUrl[splitUrl.length - 2].split("-").join(" ")
            propertyID = splitUrl[splitUrl.length - 2]
          } else {
            propertyName = splitUrl[splitUrl.length - 1].split("-").join(" ")
            propertyID = splitUrl[splitUrl.length - 1]

          }

          propertyClicks.push({ ...item, PropertyName: propertyName, PropertyID: propertyID })
        } else {
          miscClicks.push(item)
        }
      })

      page++

      if (getData.Results.length < 1000) {
        hasMoreData = false
      }
    }

    setResponseStatus(event, 200)
    console.log(propertyClicks.length, miscClicks.length)
    return {
      status: "OK",
      propertyClicks: propertyClicks,
      miscClicks: miscClicks,
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
