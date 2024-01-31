import "./HomeFormCard.css";
import React, { useState } from "react";
import {
  Bedroom,
  Building,
  LocationIcon,
  PriceIcon,
  SelectBottomIcon,
} from "../../../components/svgicons";
import { useEffect } from "react";

export default function HomeFormCard() {


  const [proertyActive,setPropertyTypeActive] = useState(null)
  const [bedActive,setBedActive] = useState(null)
  const [priceFrom,setPriceFrom] = useState(null);
  const [priceTo,setPriceTo] = useState(null);
  const [priceFromActive,setPriceFromActive] = useState(false);
  const [priceToActive,setPriceToActive] = useState(false);

  // price from list obj
  const price_from_list = [
    { name: "300,000", value: 300000 },
    { name: "400,000", value: 400000 },
    { name: "500,000", value: 500000 },
    { name: "600,000", value: 600000 },
    { name: "700,000", value: 700000 },
    { name: "800,000", value: 800000 },
    { name: "900,000", value: 900000 },
    { name: "1,000,000", value: 1000000 },
    { name: "1,100,000", value: 1100000 },
    { name: "1,200,000", value: 1200000 },
    { name: "1,300,000", value: 1300000 },
    { name: "1,400,000", value: 1400000 },
    { name: "1,500,000", value: 1500000 },
    { name: "1,600,000", value: 1600000 },
    { name: "1,700,000", value: 1700000 },
    { name: "1,800,000", value: 1800000 },
    { name: "1,900,000", value: 1900000 },
    { name: "2,000,000", value: 2000000 },
    { name: "2,100,000", value: 2100000 },
    { name: "2,200,000", value: 2200000 },
    { name: "2,300,000", value: 2300000 },
    { name: "2,400,000", value: 2400000 },
    { name: "2,500,000", value: 2500000 },
    { name: "2,600,000", value: 2600000 },
    { name: "2,700,000", value: 2700000 },
    { name: "2,800,000", value: 2800000 },
    { name: "2,900,000", value: 2900000 },
    { name: "3,000,000", value: 3000000 },
    { name: "4,000,000", value: 4000000 },
    { name: "5,000,000", value: 5000000 },
  ]

  const price_to_list = [
    { name: "300,000", value: 300000 },
    { name: "400,000", value: 400000 },
    { name: "500,000", value: 500000 },
    { name: "600,000", value: 600000 },
    { name: "700,000", value: 700000 },
    { name: "800,000", value: 800000 },
    { name: "900,000", value: 900000 },
    { name: "1,000,000", value: 1000000 },
    { name: "1,100,000", value: 1100000 },
    { name: "1,200,000", value: 1200000 },
    { name: "1,300,000", value: 1300000 },
    { name: "1,400,000", value: 1400000 },
    { name: "1,500,000", value: 1500000 },
    { name: "1,600,000", value: 1600000 },
    { name: "1,700,000", value: 1700000 },
    { name: "1,800,000", value: 1800000 },
    { name: "1,900,000", value: 1900000 },
    { name: "2,000,000", value: 2000000 },
    { name: "2,100,000", value: 2100000 },
    { name: "2,200,000", value: 2200000 },
    { name: "2,300,000", value: 2300000 },
    { name: "2,400,000", value: 2400000 },
    { name: "2,500,000", value: 2500000 },
    { name: "2,600,000", value: 2600000 },
    { name: "2,700,000", value: 2700000 },
    { name: "2,800,000", value: 2800000 },
    { name: "2,900,000", value: 2900000 },
    { name: "3,000,000", value: 3000000 },
    { name: "4,000,000", value: 4000000 },
    { name: "5,000,000", value: 5000000 },
  ]

  useEffect(()=>{
    if(priceFrom?.value >= priceTo?.value){
      setPriceTo(null)
    }
    if(!(priceFrom?.name)){
      setPriceTo(null)
    }
    console.log('mounting for component form in home overlap full form')
  },[priceFromActive])


  return (
    <div className="form-home-overlap-container">
      <div className="form-home-location-div">
        <LocationIcon />
        <input type="text" placeholder="Search City, Reference id.." />
      </div>
      <div className="form-home-div">
        <div className="form-home-div icons-div">
          <Building />
          <p className="form-home-label-name">Proprety Type</p>
        </div>
        <div className="form-home-propertyType-container">
          <div onClick={()=>setPropertyTypeActive('apartment')} className={`${ proertyActive === 'apartment' && 'active'} form-home-propertyType-type`}>
            <p>Apartment</p>
          </div>
          <div onClick={()=>setPropertyTypeActive('villa')} className={`${ proertyActive === 'villa' && 'active'} form-home-propertyType-type`}>
            <p>Villa</p>
          </div>
          <div onClick={()=>setPropertyTypeActive('townhouse')} className={`${ proertyActive === 'townhouse' && 'active'} form-home-propertyType-type`}>
            <p>Townhouse</p>
          </div>
          <div onClick={()=>setPropertyTypeActive('penthouse')} className={`${ proertyActive === 'penthouse' && 'active'} form-home-propertyType-type`}>
            <p>Penthouse</p>
          </div>
        </div>
      </div>
      <div className="form-home-div">
        <div className="form-home-div icons-div">
          <Bedroom />
          <p className="form-home-label-name">Proprety Type</p>
        </div>
        <div className="form-home-propertyType-container">
          <div onClick={()=>setBedActive('0')} className={`form-home-bedRoom ${bedActive === '0' && 'bed-active' }`}>
            <p>Studio</p>
          </div>
          <div onClick={()=>setBedActive('1')} className={`form-home-bedRoom ${bedActive === '1' && 'bed-active' }`}>
            <p>1</p>
          </div>
          <div onClick={()=>setBedActive('2')} className={`form-home-bedRoom ${bedActive === '2' && 'bed-active' }`}>
            <p>2</p>
          </div>
          <div onClick={()=>setBedActive('3')} className={`form-home-bedRoom ${bedActive === '3' && 'bed-active' }`}>
            <p>3</p>
          </div>
          <div onClick={()=>setBedActive('4')} className={`form-home-bedRoom ${bedActive === '4' && 'bed-active' }`}>
            <p>4</p>
          </div>
          <div onClick={()=>setBedActive('5')} className={`form-home-bedRoom ${bedActive === '5' && 'bed-active' }`}>
            <p>5</p>
          </div>
          <div onClick={()=>setBedActive('6')} className={`form-home-bedRoom ${bedActive === '6' && 'bed-active' }`}>
            <p>6</p>
          </div>
          <div onClick={()=>setBedActive('7')} className={`form-home-bedRoom ${bedActive === '7' && 'bed-active' }`}>
            <p>7+</p>
          </div>
        </div>
      </div>
      <div className="form-home-div">
        <div className="form-home-div icons-div">
          <PriceIcon />
          <p className="form-home-label-name">Price (AED)</p>
        </div>
        <div className="price-section">
          <div className="price-section-container">
            <div className="relative w-full">
              <div  className={`price-div w-full ${priceFromActive && 'active'}`}>
                <p onClick={()=>setPriceFromActive(!priceFromActive)}>{ priceFrom?.name ? priceFrom?.name : 'Price From'}</p>
                {  priceFrom?.name ?  <p onClick={()=>{
                  setPriceFromActive(!priceFromActive)
                  setPriceFrom(null)
                }}>&#x2715;</p>  : <SelectBottomIcon/>}
              </div>
             { priceFromActive && <div className="price-from-lists">
                {
                  price_from_list.map(({name,value},index)=>{
                    return <p key={index} onClick={()=>{
                      setPriceFrom({index,name,value})
                      setPriceFromActive(!priceFromActive)
                    }} className={`price-from-list ${priceFrom?.index === index && 'active'  } `}>{name}</p>
                  })
                }
              </div>}
            </div>
            <div className="relative w-full">
              <div onClick={()=>setPriceToActive(!priceToActive)} className={`price-div w-full ${priceToActive && 'active'}`}>
                <p>{ priceTo?.name ? priceTo.name : 'Price To'}</p>
                <SelectBottomIcon/>
              </div>
             { priceToActive && <div className="price-from-lists">
                {
                  price_to_list.filter((items)=> priceFrom?.value < items.value )
                  .map(({name,value},index)=>{
                    return ( 
                      <p key={index} 
                         onClick={()=>{
                         setPriceTo({index,name,value})
                         setPriceToActive(!priceToActive)
                        }} 
                        className={`price-from-list ${priceTo?.index === index && 'active'  } `}>{name}</p>
                    )
                  })
                }
              </div>}
            </div>
            
          </div>
          <div className="filter-btn-div">
            <button>Show {7} results</button>
          </div>
        </div>
      </div>
    </div>
  );
}
