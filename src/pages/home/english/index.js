import { connect } from 'react-redux';
import Home from './Home';
import {
  getHomeProperty,
  onHomeSearchInputChange,
  getHomeLocationSearch,
  clearHomeProperty,
  getBlogWeb,
  setHomePageSearchResultsCount,
} from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    homeProperty: state.homeReducer.homeProperty,
    homeSearch: state.homeReducer.homeSearch,
    blogs: state.blogwebReducer.blogs,
    searchCount:state.homeReducer.searchCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomeProperty: (params, search) =>
      dispatch(getHomeProperty(params, search)),
    // onHomeSearchInputChange: payload =>
    // console.log(payload,'paa'),
    onHomeSearchInputChange:(payload)=> dispatch(setHomePageSearchResultsCount(payload)),
    
    getBlogWeb: (params) => dispatch(getBlogWeb(params)),
    getHomeLocationSearch: (payload) => dispatch(getHomeLocationSearch(payload)),
    clearHomeProperty: () => dispatch(clearHomeProperty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
