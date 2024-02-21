import "./home.scss";
import { Link, useNavigate } from "react-router-dom";
// import HomeFormCard from "../homeformcard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HomeFormCard from "./HomeFormCard";
// import ViewAll from "../viewall";
import HomeCategory from "../homecategory";
// import RenderComponent from "../../../components/renderComponent";
// import { MoveToTop } from "../../../components/movetotop";
import Searches from "../../../components/searches";
import { useEffect, useState } from "react";
import FooterNew from "../../../components/footerNew";

import { Helmet } from "react-helmet";
import Header from "../../../components/newHeader";
import HomeBanner from "./HomeBanner";
import { HomeIcon, LeftArrowIcon } from "../../../components/svgicons";
import SearchIcon from "../../../components/svg/search";
import TitleComponent from "../../../components/TitleComponent";
import Banner from "../banner/Banner";
import Blog from "./Blog";
import NewFooter from "../../../components/newFooter/NewFooter";

const Home = (props) => {
  const [bannerFormUi, setBannerForUi] = useState(false);
  const [ImageIndex, setImageIndex] = useState(0);
  // const navigate = useNavigate();

  useEffect(() => {
    props.clearHomeProperty();
    props.getBlogWeb();
    // props.onHomeSearchInputChange();
  }, []);


  const navigator = useNavigate()

  // props.homeProperty()

  console.log(props, "props");

  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleClickSearch = (status) => {
    setBannerForUi(status);
  };

  const image_obj = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1706354924674-0304751469e8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const propertyTypeObjData = [
    {
      name: "Apartment",
      paragraph: "84 New Properties Available",
      imageSrc: "/assets/pic/apartment.jpeg",
    },
    {
      name: "Villa",
      paragraph: "84 New Properties Available",
      imageSrc: "/assets/pic/villa.jpeg",
    },
    {
      name: "Townhouse",
      paragraph: "84 New Properties Available",
      imageSrc: "/assets/pic/town-house.jpeg",
    },
    {
      name: "Penthouse",
      paragraph: "84 New Properties Available",
      imageSrc: "/assets/pic/pen-house.jpeg",
    },
  ];

  const renderCard = () =>
    props.blogs.map((item, i) => <Blog key={i} {...item} />);

  const handleNextBtn = () => {
    setImageIndex((index) => {
      if (index === image_obj.length - 1) return 0;
      return index + 1;
    });
  };

  const handlePreviousBtn = () => {
    setImageIndex((index) => {
      if (index === 0) return image_obj.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="home-english">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Freehold Properties in Dubai | Residential Properties in Dubai |
          Commercial properties in UAE - Property Seller
        </title>
        <meta
          name="keywords"
          content="Freehold Properties in Dubai, Residential Properties in Dubai, Commercial properties in UAE"
        />
        <meta
          property="og:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Seller "
        />

        <meta
          name="description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <link rel="canonical" href="https://www.propertyseller.ae" />

        <meta
          property="og:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Seller"
        />

        <meta
          property="og: description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />

        <meta property="og:url" content="http://www.propertyseller.ae" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter: description"
          content="Looking for Freehold,Commercial and Residential Properties in Dubai, UAE. We are an exclusive real estate agent in Dubai, UAE specialized in the best real estate deals for sale and rent. Contact us for more details."
        />
        <meta name="twitter:image" content="" />
        <meta
          name="twitter:title"
          content="Freehold Properties in Dubai | Residential Properties in Dubai | Commercial properties in UAE - Property Seller"
        />
      </Helmet>

      <Header />
      <HomeBanner
        stateForButton={bannerFormUi}
        handleClickSearch={handleClickSearch}
      >
        {!bannerFormUi && (
          <>
            <div className="home-banner-mainTitle">
              <p className="text-[40px] sm:text-[70px] sm:pb-2">
                New Properties, Everyday...
              </p>
            </div>
            <div className="w-full sm:flex sm:justify-center sm:items-center sm:gap-3 ">
              <div
                className="mb-3 sm:m-0 m-auto sm:w-[200px] gap-1 flex justify-center py-5 sm:py-3 rounded-10px w-[95%]  bg-[#000] text-pure-white cursor-pointer"
                onClick={() => handleClickSearch(true)}
              >
                <SearchIcon
                  svgClassName={"w-[45px] h-[34px] sm:w-[25px]"}
                  stroke="#fff"
                />
                <button className="text-[#fff] font-bold sm:font-medium">
                  Property Search
                </button>
              </div>

              <Link to={"/all-properties"}>
                <div className="mb-3 sm:w-[200px] m-auto sm:m-0 flex justify-center py-5 sm:py-4 items-center gap-4 rounded-10px w-[95%] bg-pure-white text-black font-medium bg-[#fff]">
                  <HomeIcon fill={"#000"} />
                  <button className="font-bold">All Properties</button>
                </div>
              </Link>
            </div>
          </>
        )}
        {bannerFormUi && (
          <HomeFormCard
            searchCount={props.searchCount}
            onHomeSearchInputChange={props.onHomeSearchInputChange}
          />
        )}
        {/* {JSON.stringify(props.searchCount)} */}
        {/* {

        // console.log(props.searchCount,'props.homeProperty')
        } */}
        {/* {console.log(props.onHomeSearchInputChange,'props.onHomeSearchInputChange')} */}
      </HomeBanner>

      <div className="mt-20 mb-10">
        <HomeCategory advancedSearch={advancedSearch} />
      </div>

      {/* Proprety Type */}
      <div className="">
        <TitleComponent
          classTitleTwo={"text-[#666666]"}
          className={"home-property-type font-sf-pro-medium"}
          titleOne={"Availability Based on "}
          titleTwo={" Proprety Type"}
        />
        <div className="flex gap-5 my-8 justify-center flex-wrap">
          {propertyTypeObjData.map(({ name, paragraph, imageSrc }, index) => (
            // <Link to={'/property-search'}>
              <div onClick={()=> navigator('/property-search')} key={index} className="property-type">
                <div className="property-type-image-container">
                  <img loading="lazy" src={imageSrc} alt="" />
                </div>
                <div className="property-type-title">
                  <h1>{name}</h1>
                </div>
                <div className="property-type-paragraph">
                  <p>{paragraph}</p>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      </div>
      {/* -------------- */}
      {/* banner section */}
      <div className="my-16">
      <Banner />

      </div>
      {/* banner section */}
      {/* <div className="w-full p-5 bg-black text-white font-bold text-xl flex justify-center banner-cls sm:text-lg">
        Explore what is up for&nbsp;
        <span style={{ color: "#FCA120" }}>sale</span>
      </div> */}
      {/* <RenderComponent
        data={props.homeProperty.property}
        propertyCallApi={props.getHomeProperty}
        newList
      /> */}
      {/* <div className="home-ctrl">
        <ViewAll goToOtherPage link={`/property-search?limit=10&offset=0`} />
        <MoveToTop />
      </div> */}
      <div className="">
        <div className="flex-col sm:flex-row flex w-[90%] justify-between m-auto items-start sm:items-center">
          <TitleComponent
            titleOne={"Explore city based "}
            titleTwo={"Properties"}
            className={"mt-10 mb-8   "}
            classTitleOne={
              "citiy-based-propertyMain-title-first text-[20px] sm:text-[45px]"
            }
            classTitleTwo={
              "citiy-based-propertyMain-title-last text-[40px] sm:text-[65px]"
            }
          />

          <div className="m-auto sm:m-0 block sm:hidden relative">
            <div className=" h-[200px] w-full rounded-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image_obj[ImageIndex].imageSrc}
                alt=""
              />
            </div>
            <div className="flex w-full justify-between px-6 h-full items-center absolute top-0">
              <FaChevronLeft size={"25px"} onClick={handlePreviousBtn} />
              <FaChevronRight size={"25px"} onClick={handleNextBtn} />
            </div>
          </div>

          <div className="m-auto  sm:m-0 mt-5">
            <button className=" citiy-based-propertyMain-btn">
              View All Cities{" "}
            </button>
          </div>
        </div>

        <div className="hidden sm:flex  m-auto gap-5 w-[90%]  justify-between  flex-wrap  items-center  ">
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Marina</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Downtown</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>The Palm Jumeriah</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Al Reem Island</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Al Reem Island</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Marina</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Downtown</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>The Palm Jumeriah</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Al Reem Island</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
          <div className="city-based-properties-div">
            <div className="w-[211px] relative h-[200px] rounded-t-10px rounded-b-10px overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/assets/pic/cities.jpeg"
                alt=""
              />
              <div className="cites-based-card-container absolute top-0 mt-4 ml-2 flex gap-3 flex-col ">
                <span className="w-[80px]">Dubai</span>
                <h2>Al Reem Island</h2>
              </div>
            </div>
            <div className="cites-based-paragraph">
              <p className="mb-3 w-[88%]">84 New Propreties for Sale</p>
            </div>
          </div>
        </div>
      </div>
      {/* blog title and more button */}

      <div className="pb-8">
        <div className="flex w-[90%] justify-between m-auto items-center">
          <TitleComponent
            titleOne={"Blogs:  "}
            titleTwo={"Read more, Learn More"}
            className={"mt-10 mb-8"}
            classTitleOne={
              "citiy-based-propertyMain-title-first text-[20px] sm:text-[50px]"
            }
            classTitleTwo={
              "citiy-based-propertyMain-title-last text-[34px] sm:text-[70px]"
            }
          />
          <div className="hidden sm:block">
            <button className="citiy-based-propertyMain-btn">
              View All Blogs{" "}
            </button>
          </div>
        </div>
        <div className="w-full flex gap-4 flex-wrap items-center justify-center">
          {/* <Blog/> */}
          <div className="mx-5 flex flex-col sm:flex-row gap-5">
            {renderCard()}
          </div>

          <div className="block sm:hidden">
            <button className="citiy-based-propertyMain-btn">
              View All Blogs{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-solid text-[#d9dbda]">
        <Searches />
      </div>
      {/* <FooterNew /> */}
      <NewFooter />
    </div>
  );
};

export default Home;
