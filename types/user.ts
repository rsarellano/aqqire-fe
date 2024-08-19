export type User = {
  id?: number
  email: string
  first_name: string
  last_name: string
  account_type: string
  profile_pic: string
  role: string
  work_type: string
  active: boolean
  broker: boolean
  owner: boolean
  staff: boolean
  superuser: boolean

  password?: string

  // Optionals
  userPackage?: string
  middle_name?: string
  phone?: string
  street?: string
  city?: string
  state?: string
  zip?: string
  company?: string
  company_position?: string
  profile_description?: string
  email_CC?: string
  job_title?: string
  company_professional?: string
  date_started: string 
  date_finished: string
  keywords?: string[]
  company_logo: string
  license_number: string
  license_state: string
  affiliates: string[]
  roles?: []
}
