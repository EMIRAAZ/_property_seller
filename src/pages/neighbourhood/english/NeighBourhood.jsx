import './neighbourhood.scss';
import { useEffect } from 'react';
import Header from '../../../components/newHeader';
import BasicButton from '../../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';
import { MoveToTop } from '../../../components/movetotop';
import FooterNew from '../../../components/footerNew';
import SearchHeader from '../../../components/searchHeader/SearchHeader';
import PropertyListingCard from '../../../components/propertyListingCard/PropertyListingCard';
import AdsBanner from '../../../components/adsBanner/AdsBanner';

const NeighborHood = props => {
  useEffect(() => {
    props.getNeighborhoodWeb();
  }, []);
  return (
    <div className="neighbourhood">
      {/* <Header customClass="neigh-header-class" /> */}
      {/* <div className="main-container">
        <h1 className="heading">Famous Neighbourhood</h1>
        <div className="card-div">
          {props.neighbor.rows &&
            props.neighbor.rows.map(item => <Card key={item.id} {...item} />)}
        </div>
      </div> */}
      <Header/>

      <SearchHeader/>


      <div className="flex justify-center gap-4 mt-11 mb-4">
        
        <PropertyListingCard/>
        <AdsBanner/>
      </div>


      <MoveToTop />
      <FooterNew />
    </div>
  );
};

///////////////////

const Card = props => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div
        style={{
          backgroundImage: `url(${props.image})`,
        }}
        className="image-div"
      >
        <div className="text-div">
          <h2 className="neigh-name"> {props.title} </h2>
          <p className="neigh-emirate">{props.emirate} </p>
        </div>
      </div>
      <div className="button-div">
        <BasicButton
          onClick={() =>
            navigate(
              `/listproperty/neighbourhood?neighborhood=${props.title}&sale=buy`
            )
          }
          customClass="btn-1"
        >
          VIEW PROPERTIES
        </BasicButton>
        {/* <BasicButton
          onClick={() =>
            navigate(
              `/listproperty/neighbourhood?neighborhood=${props.title}&sale=rent`
            )
          }
          customClass="btn-2"
        >
          RENT
        </BasicButton> */}
      </div>
    </div>
  );
};
/////////////////
export default NeighborHood;
