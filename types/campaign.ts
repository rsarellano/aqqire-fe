export type clicks = {
  EmailAddress: string
  URL: string
  ListID: string
  Date: Date
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: string
}

export type propertyClicks = clicks & {
  PropertyName: string
  PropertyID: string
}


export type opens = {
  EmailAddress: string
  ListID: string
  Date: Date
  IPAddress: string
  Latitude: number
  Longitude: number
  City: string
  Region: string
  CountryCode: string
  CountryName: string
}


export type sent = {
  Name: string
  FromName: string
  FromEmail: Date
  ReplyTo: string
  SentDate: Date
  TotalRecipients: number
  CampaignID: string
  Subject: string
  Tags: string[]
  WebVersionURL: string
  WebVersionTextURL: string
}


