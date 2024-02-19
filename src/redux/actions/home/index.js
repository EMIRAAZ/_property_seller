import axios from "../../../utils/axios";
import {
  GET_HOME_PROPERTY,
  GET_HOME_PROPERTY_ERROR,
  GET_HOME_PROPERTY_STARTED,
  HOME_SEARCH_INPUT_CHANGE_ITEM,
  GET_HOME_LOCATION_SEARCH,
  GET_HOME_LOCATION_SEARCH_ERROR,
  GET_HOME_LOCATION_SEARCH_STARTED,
  CLEAR_HOME_PROPERTY,
  GET_HOME_SEARCH_RESULTS_COUNT,
} from "../../constants";

export const clearHomeProperty = (params) => {
  return {
    type: CLEAR_HOME_PROPERTY,
  };
};

/// home property ///

const getHomePropertyStarted = (params) => {
  return {
    type: GET_HOME_PROPERTY_STARTED,
    payload: params,
  };
};

const getHomePropertyError = () => {
  return {
    type: GET_HOME_PROPERTY_ERROR,
  };
};

export const getHomeProperty =
  (params = "", search) =>
  async (dispatch) => {
    try {
      dispatch(getHomePropertyStarted(search ? params : ""));
      const res = await axios.get(`/api/property?${params}`);
      dispatch({
        type: GET_HOME_PROPERTY,
        payload: res.data?.data,
      });
    } catch (e) {
      dispatch(getHomePropertyError());
    }
  };

/// home property ///

/// home search ///

export const onHomeSearchInputChange = (payload) => {
  return {
    type: HOME_SEARCH_INPUT_CHANGE_ITEM,
    payload: payload,
  };
};

/// home search ///

/// home location search ///

const getHomeLocationSearchStarted = () => {
  return {
    type: GET_HOME_LOCATION_SEARCH_STARTED,
  };
};

const getHomeLocationSearchError = () => {
  return {
    type: GET_HOME_LOCATION_SEARCH_ERROR,
  };
};

export const getHomeLocationSearch = (location) => async (dispatch) => {
  try {
    dispatch(getHomeLocationSearchStarted());
    const res = await axios.post(`/api/location`, { location });
    dispatch({
      type: GET_HOME_LOCATION_SEARCH,
      payload: res.data?.data,
      keyword: location,
    });
  } catch (e) {
    dispatch(getHomeLocationSearchError());
  }
};

/// home location search ///

//  search  results of home pagwe search and get count to view the home search black button
export const setHomePageSearchResultsCount = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_HOME_SEARCH_RESULTS_COUNT_STARTED" });
    const res = await axios.post(`/api/location`, data);
    dispatch({
      type: GET_HOME_SEARCH_RESULTS_COUNT,
      payload: res.data,
    });
  }  catch (e) {
    dispatch({type:'GET_HOME_SEARCH_RESULTS_COUNT_ERROR'});
  }
};

// props.onHomeSearchInputChange;
