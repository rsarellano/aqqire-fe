import { eventHandler, getRequestHeader } from "h3"
import type { sent } from "../../types/campaign"

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const clientId = process.env.CAMPAIGN_CLIENT_ID

  try {
    const getData = await $fetch<{
      Results: sent[]
      ResultsOrderedBy: string
      OrderDirection: string
      PageNumber: number
      PageSize: number
      RecordsOnThisPage: number
      TotalNumberOfRecords: number
      NumberOfPages: number
    }>(
      `https://api.createsend.com/api/v3.3/clients/${clientId}/campaigns.json`,
      {
        headers: {
          Authorization: "Basic " + btoa(process.env.CAMPAIGN_API_KEY!),
        },
        query: {
          pagesize: query.pagesize || 25,
          page: query.page || 1,
          sentfromdate: query.sentfromdate?.toLocaleString().split("T")[0] || "",
          senttodate: query.senttodate?.toLocaleString().split("T")[0] || "",
        },
      }
    )

    setResponseStatus(event, 200)
    return {
      status: "OK",
      Results: getData.Results,
      ResultsOrderedBy: getData.ResultsOrderedBy,
      OrderDirection: getData.OrderDirection,
      PageNumber: getData.PageNumber,
      PageSize: getData.PageSize,
      RecordsOnThisPage: getData.RecordsOnThisPage,
      TotalNumberOfRecords: getData.TotalNumberOfRecords,
      NumberOfPages: getData.NumberOfPages,
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
