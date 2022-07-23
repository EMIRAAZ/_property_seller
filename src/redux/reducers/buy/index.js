import { initialState } from './initialState';
import {
  GET_BUY_PROPERTY,
  GET_BUY_PROPERTY_ERROR,
  GET_BUY_PROPERTY_STARTED,
  ON_CHANGE_BUY_PROPERTY_INPUT,
  GET_BUY_LOCATION_SEARCH_STARTED,
  GET_BUY_LOCATION_SEARCH_ERROR,
  GET_BUY_LOCATION_SEARCH,
} from '../../constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_BUY_PROPERTY_INPUT:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          [action.payload.key]: action.payload.value,
        },
      };
    case GET_BUY_PROPERTY:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: false,
          loading: false,
          property: action.payload.rows,
          count: action.payload.count,
        },
      };
    case GET_BUY_PROPERTY_STARTED:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: false,
          loading: true,
        },
      };
    case GET_BUY_PROPERTY_ERROR:
      return {
        ...state,
        buyProperty: {
          ...state.buyProperty,
          error: true,
          loading: false,
        },
      };
    case GET_BUY_LOCATION_SEARCH:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: false,
            loading: false,
            location: action.payload && removeDuplicate(action.payload[0]),
          },
        },
      };
    case GET_BUY_LOCATION_SEARCH_STARTED:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: false,
            loading: true,
          },
        },
      };
    case GET_BUY_LOCATION_SEARCH_ERROR:
      return {
        ...state,
        cardInput: {
          ...state.cardInput,
          locationSearch: {
            ...state.cardInput.locationSearch,
            error: true,
            loading: false,
          },
        },
      };
    default:
      return state;
  }
};

const removeDuplicate = (array = []) => {
  const newArray = [...array];
  const uniqueTitle = [];
  const uniqueArray = [];
  for (let i = 0; i < newArray.length; i++) {
    if (!uniqueTitle.includes(newArray[i].placeAddress)) {
      uniqueTitle.push(newArray[i].placeAddress);
      uniqueArray.push(newArray[i]);
    }
  }
  return uniqueArray;
};

export default reducer;
