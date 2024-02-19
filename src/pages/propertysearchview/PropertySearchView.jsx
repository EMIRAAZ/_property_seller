import "./propertysearchview.scss";
import { useLocation } from "react-router-dom";
import Header from "../../components/newHeader";
import ListHeading from "../../components/ListHeading";
import QueryCard from "../../components/querycard";
import RenderComponent from "../../components/renderComponent";
import FooterNew from "../../components/footerNew";
import { MoveToTop } from "../../components/movetotop";
import NewsHeader from "../../admin/news/newsheader";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import { HomeIcon } from "../../components/svgicons";
import DownArrow from "../../components/svgicons/DownArrow";
import PropertyListingCard from "../../components/propertyListingCard/PropertyListingCard";
import AdsBanner from "../../components/adsBanner/AdsBanner";

const PropertySearchView = (props) => {
  const search = useLocation().search;

  return (
    <div className="list-property-api">
      <Header />
      {/* <QueryCard
        onInputChange={props.onHomeSearchInputChange}
        onSearchLocation={props.getHomeLocationSearch}
        cardInput={props.homeSearch}
        onSearch={params => {
          props.getHomeProperty(params);
        }}
      /> */}
      <SearchHeader />
      <div className="ps-14">
        <div className="flex items-center">
          <div className="">
            <HomeIcon height="10px" />
          </div>
          <span className="text-[11px] text-[#666666] pe-2">
            Properties for sale in Dubai
          </span>
          <span className="text-[15px] text-[#666666]"> &gt; </span>
          <span className="text-[11px] text-[#666666] ps-2">
            Properties for Sale in Arabian Branches
          </span>
        </div>

        <div className="flex justify-between w-[95%]">
          <div className="">
            <h1 className="ps-2 text-[42px] font-medium">
              Villas for sale in Arabian Ranches
            </h1>
            <p className="ps-2 pt-2 text-[#545454]">276 Properties</p>
          </div>
          <div className="flex items-center gap-3 text-[#666666] ">
            <span className=" text-[13px]">Sorted By :</span>
            <div className="flex gap-3 border border-slate-400 px-3 py-2 rounded-[7px]">
              <p clas>Newest</p>
              <div className=" w-3">
                <DownArrow />
              </div>
            </div>
          </div>
        </div>

        <div className="ps-5 w-[95%] flex bg-[#D2D2D2] rounded-10px mt-3 px-4 py-5 gap-x-4 gap-y-2 flex-wrap">
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
          <span className="text-[13px] text-[#545454]">Al Raheem ( 70 )</span>
        </div>
      </div>

      {/* <ListHeading count={props.homeProperty.count} />
      <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        count={props.homeProperty.count}
        iQuery={search.slice(1)}
        isPagination
      /> */}

      <div className="flex justify-center gap-4 mt-11 mb-4">
        <PropertyListingCard />
        <AdsBanner />
      </div>

      <FooterNew />
      <MoveToTop />
    </div>
  );
};

export default PropertySearchView;
