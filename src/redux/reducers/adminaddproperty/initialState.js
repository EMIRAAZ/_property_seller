export const initialState = {
  env: {
    error: false,
    loading: false,
    success: false,
    editing: false,
  },
  propertyValue: {
    title: '',
    mainTitle: '',
    description: '',
    images: [],
    price: 0.0,
    propertyType: '',
    propertySize: 0,
    propertySizeUnit: '',
    propertyAge: 0.0,
    noOfBedroom: 0,
    noOfBathroom: 0,
    amenities: [],
    referenceNo: '',
    trakheesiPermit: '',
    ownership: '',
    brokerORN: '',
    agentBRN: '',
    videoView: '',
    verified: false,
    call: '',
    email: '',
    whatsapp: '',
    featured: false,
    luxury: false,
    for: '',
    placeAddress: '',
    building: '',
    city: '',
    agentId: '',
    agencyId: '',
    neighborhood: [],
    taglineId: '',
  },
  propertyOptions: {
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
    sale: [
      { name: 'Sell', value: 'sell' },
      { name: 'Rent', value: 'rent' },
      { name: 'Both', value: 'both' },
    ],
    agent: [],
    amenities: [],
    neighbor: [],
    tagline: [],
  },
};
