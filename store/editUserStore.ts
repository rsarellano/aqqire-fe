import type { User } from '~/types/user'

export const user = ref<User>({
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

  licenseNumber: '',
  licenseState: '',
  affiliates: [],
})
