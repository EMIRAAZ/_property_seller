export const initialState = {
  buyProperty: {
    loading: false,
    error: false,
    property: [],
  },
  cardInput: {
    location: '',
    propertyType: '',
    sale: '',
    priceFrom: '',
    priceTo: '',
    noOfBed: '',
    noOfBath: '',
    locationSearch: {
      loading: false,
      error: false,
      location: [],
    },
  },
};
