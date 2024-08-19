import type { User } from '~/types/user'



export const user = ref<User>({
  first_name: "",
  middle_name: "",
  last_name: "",
  email: "",
  userPackage: "",
  profile_pic: "",

  work_type: "",
  account_type: "",
  role: "",

  active: false,
  broker: false,
  owner: false,
  staff: false,
  superuser: false,

  // fields not yet in the api
  password: "",

  phone: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  company: "",
  company_position: "",
  profile_description: "",
  email_CC: "",
  job_title: "",
  company_professional: "",
  date_started: "",
  date_finished: "",

  keywords: [],
  company_logo: "",

  license_number: "",
  license_state: "",
  affiliates: [],
})
