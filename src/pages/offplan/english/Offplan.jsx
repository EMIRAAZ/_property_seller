import './Offplan.scss';
import Header from '../../../components/newHeader';
import RenderComponent from '../../../components/renderComponent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListHeading from '../../../components/ListHeading';
import FooterNew from '../../../components/footerNew';
import BasicButton from '../../../components/button/BasicButton';
import SearchHeader from '../../../components/searchHeader/SearchHeader';
import PropertyListingCard from '../../../components/propertyListingCard/PropertyListingCard';
import AdsBanner from '../../../components/adsBanner/AdsBanner';
import NewFooter from '../../../components/newFooter/NewFooter';

const Offplan = props => {
  let navigate = useNavigate();

  useEffect(() => {
    props.getOffplanWeb();
  }, []);

  return (
    <div className="main-off-container">
      {/* <Header customClass="header-border-cls" />
      <ListHeading
        className="list-header"
        main="Offplan Properties"
        count={props.offplan.count}
      /> */}

      {/* <BasicButton
        onClick={() => navigate(`/offplan-projects`)}
        customClass="absolute top-15 right-5 sm:text-xs"
        children="Offplan Projects"
      /> */}
      {/* <div className="offplan-container">
        <RenderComponent
          to="off-plan"
          className="w-full"
          data={props.offplan.data}
          propertyCallApi={() => {}}
          count={props.offplan.count}
          type="PROPERTY"
          iQuery={`limit=${6}&offset=${0}`}
          isPagination
        />
      </div> */}

<Header/>

<SearchHeader/>


<div className="flex justify-center gap-4 mt-11 mb-4">
  
  <PropertyListingCard/>
  <AdsBanner/>
</div>

      {/* <FooterNew /> */}
      <NewFooter/>
    </div>
  );
};
export default Offplan;
