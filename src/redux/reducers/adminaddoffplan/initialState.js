export const initialState = {
  env: {
    error: false,
    loading: false,
    success: false,
    editing: false,
  },
  offplanValue: {
    title: '',
    projectName: '',
    projectOverview: '',
    interiorDetails: '',
    images: [],
    agentId: '',
    price: [],
    videoLink: '',
    propertyType: '',
    propertySize: '',
    propertySizeUnit: '',
    noOfBedroom: '',
    noOfBathroom: '',
    priceForAvailability: [],
    paymentPlan: [],
    whyThisProperty: [],
    placeAddress: '',
    building: '',
    city: '',
    emirate: '',
    latitude: '',
    longitude: '',
  },
  offplanOptions: {
    propertyType: [
      { name: 'Apartment', value: 'Apartment' },
      { name: 'Villa', value: 'Villa' },
      { name: 'Townhouse', value: 'Townhouse' },
      { name: 'Penthouse', value: 'Penthouse' },
      { name: 'Compound', value: 'Compound' },
      { name: 'Duplex', value: 'Duplex' },
      { name: 'Full Floor', value: 'Full Floor' },
      { name: 'Half Floor', value: 'Half Floor' },
      { name: 'Whole Building', value: 'Whole Building' },
      { name: 'Land', value: 'Land' },
      { name: 'Bulk Sale Unit', value: 'Bulk Sale Unit' },
      { name: 'Bungalow', value: 'Bungalow' },
      { name: 'Hotel & Hotel Apartment', value: 'Hotel & Hotel Apartment' },
    ],
    emirate: [
      { name: 'Abu Dhabi', value: 'Abu Dhabi' },
      { name: 'Dubai', value: 'Dubai' },
      { name: 'Sharjah', value: 'Sharjah' },
      { name: 'Ajman', value: 'Ajman' },
      { name: 'Umm Al Quwain', value: 'Umm Al Quwain' },
      { name: 'Ras Al Khaimah', value: 'Ras Al Khaimah' },
      { name: 'Fujairah', value: 'Fujairah' },
    ],
    agent: [],
  },
};
