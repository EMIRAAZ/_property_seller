import "./homecategory.scss";
import { useNavigate } from "react-router-dom";

const CAT = [
  {
    id: 3,
    name: "Luxury Properties",
    page: "/luxury-property",
    image: "/assets/pic/luxury-property.png",
    colorClassName:'bg-pattens-blue'

  },
  {
    id: 1,
    name: "Featured Properties",
    page: "/listproperty/featured",
    image: "/assets/pic/featured-properties.png",
    colorClassName:'bg-lavender-mist'
  },
  {
    id: 2,
    name: "Neighbourhoods",
    page: "/neighbourhood",
    image: "/assets/pic/neighbour-hood.png",
    colorClassName:'bg-rum-rwizzle'
  },
  {
    id: 5,
    name: "Off Plan Properties",
    page: "/off-plan",
    image: "/assets/pic/offplan 1.png",
    colorClassName:'bg-frost'

  },
  {
    id: 4,
    name: "Ready Properties",
    page: "/listproperty/readytomove",
    image: "/assets/pic/read-properties.png",
    colorClassName:'bg-pattens-blue'
  },
  {
    id: 6,
    name: "Highest ROI",
    page: "/listproperty/verifiedproperties",
    image: "/assets/pic/heighest-roi.png",
    colorClassName:'bg-lavender-mist'
  },
];

const HomeCategory = (props) => {
  let navigate = useNavigate();

  const navigateTo = (page) => {
    navigate(`${page}`);
  };
  const renderHomeCategoryComponent = () => {
    return CAT.map((propertyType) => (
      <div
        key={propertyType.id}
        className={`property-type-component-outer flex-wrap ${propertyType.colorClassName}  `}
        onClick={() => navigateTo(propertyType.page)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="property-type-component-inner-paragraph">
        <a className="pl-8 font-sf-pro-medium" >{propertyType.name}</a>     
           </div>
        <div className="property-type-component-inner">
          <div className="property-type-component-inner-div">
            <img src={propertyType.image} alt={propertyType.name} />
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div
      className={`mobile-view-forcard home-category-frame ${props.advancedSearch ? "ad-s-on" : ""}`}
    >
      {renderHomeCategoryComponent()}
    </div>
  );
};

export default HomeCategory;
