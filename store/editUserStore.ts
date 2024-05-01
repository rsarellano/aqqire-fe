export const user = ref({
  email: '',
  userRoles: [],
  userType: '',
  userPackage: '',

  firstName: '',
  middleName: '',
  lastName: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  company: '',
  workType: '',
  companyPosition: '',
  profileDescription: '',
  password: '',
  emailCC: '',
  jobTitle: '',
  companyProfessional: '',
  dateStarted: '',
  dateFinished: '',

  keywords: [],
  companyLogo: '',
  profilePicture: '',
})

export type userType = typeof user
