import React, { useEffect, useState } from 'react'
import SearchIcon from '../svg/search'
import { SelectBottomIcon } from '../svgicons'
import DownArrow from '../svgicons/DownArrow'

export default function SearchHeader() {

    const [mobileScreen,setMobileScreen] = useState(false)
    const [handleAllFormFields,setHandleAllFormFields] = useState({propertType:false,bed:false,priceFrom:false,priceTo:false})
    const [valueOfSearchBar,setValueOfSearchBar] = useState({property:'Property',bed:'Bed',priceFrom:'Price From',priceTo:'Price To'})
    const [priceFromFilter,setPriceFromFilter] = useState({value:0,name:''})
    const [formActive,setFormActive] = useState('')


    useEffect(()=>{
      console.log('first')
      console.log(window.innerWidth)
    },[])
    window.addEventListener("resize",()=>{
      if(window.innerWidth < 930){
        setMobileScreen(true)
      }else{
        setMobileScreen(false)
      }
    })

    const handleOnClickFormField = (e)=>{
        setFormActive(e)
        if(e === 'property'){
          setHandleAllFormFields((prevState) => {
            if(prevState.propertType){
              return {...prevState,propertType:false}
            }else{
              return {...prevState,propertType:true}
            }
          });
        }else if(e === 'bed'){
          setHandleAllFormFields((prevState) => {
            if(prevState.bed){
              return {...prevState,bed:false}
            }else{
              return {...prevState,bed:true}
            }
          });
        }else if(e === 'price-from'){
          setHandleAllFormFields((prevState) => {
            if(prevState.priceFrom){
              return {...prevState,priceFrom:false}
            }else{
              return {...prevState,priceFrom:true}
            }
          });
        }else if(e === 'price-to'){
          setHandleAllFormFields((prevState) => {
            if(prevState.priceTo){
              return {...prevState,priceTo:false}
            }else{
              return {...prevState,priceTo:true}
            }
          });
        }
      }

    const [priceFrom,setPriceFrom] = useState(null);
    const [priceFromActive,setPriceFromActive] = useState(false);
    
    
    
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


  return (
    <div className=" w-[90%] m-auto flex justify-center gap-2 lg:gap-5 items-center my-4">
        <div className="bg-[#D2D2D2] flex flex-1  gap-0 items-center px-2 w-auto lg:w-[400px]   rounded-10px py-3  ">
          <SearchIcon fill="#666666"/>
          <input type="search" placeholder="Arabian Ranches" name="searchQuery" className="w-auto bg-transparent outline-none text-[#666666] ps-2"  />
        </div>
       { !mobileScreen && <>
      


          <div onClick={()=> handleOnClickFormField('property')} className={` ${formActive === 'property' ? ' border-[#00000073]' : 'border-[#e4e4e4]'}  relative border-[1px] border-solid text-[#000000a6] cursor-pointer  bg-white px-4 py-3  gap-2 flex justify-center rounded-10px min-w-[130px]`}>
            <p className="tracking-wide text-[16px]">{valueOfSearchBar.property}</p>

            <div className="w-3 flex items-center">
             <SelectBottomIcon/>
            </div>
            { !handleAllFormFields.propertType &&
               <div className="absolute top-14 left-0 w-full h-[165px] tracking-wide text-[15px] bg-white pt-2">
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,property:'Apartment'}) }  className=" px-4 text-[#000000a6] hover:bg-slate-200 py-2">Apartment</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,property:'Villa'}) }  className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">Villa</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,property:'Townhouse'}) }  className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">Townhouse</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,property:'Penthouse'}) }  className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">Penthouse</p>
              </div>
            }
          </div>

          <div onClick={()=> handleOnClickFormField('bed')} className={` ${formActive === 'bed' ? ' border-[#00000073]' : 'border-[#e4e4e4]'}  relative border-[1px] border-solid w-[100px] justify-center  bg-white px-4 py-3 text-[#000000a6]  gap-2 flex rounded-10px`}>
            <p>{valueOfSearchBar.bed}</p>
            <div className="w-3 flex items-center">
              <SelectBottomIcon/> 
            </div>
            { !handleAllFormFields.bed &&
               <div className="absolute top-14 overflow-y-scroll  left-0 w-full h-[200px] tracking-wide text-[15px] bg-white pt-2">
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'Studio'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">Studio</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'1'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">1</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'2'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">2</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'3'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">3</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'4'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">4</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'5'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">5</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'6'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">6</p>
                 <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,bed:'7+'}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">7+</p>
              </div>
            }
          </div>


          <div onClick={()=> handleOnClickFormField('price-from') } className={` ${formActive === 'price-from' ? ' border-[#00000073] ' : ' border-[#e4e4e4] '}  text-[15px] tracking-wide  relative border-[1px] border-solid  bg-white px-4 py-3  gap-2 flex rounded-10px`} >
            <p className="">{valueOfSearchBar.priceFrom}</p>
            <div className="w-3">
            <DownArrow/>
            </div>
            { !handleAllFormFields.priceFrom &&
               <div className="absolute top-14  left-0 w-full h-[200px] overflow-y-scroll bg-white pt-2">
                { price_from_list.map((item)=>{   
                 return <p onClick={()=> {
                  setValueOfSearchBar({...valueOfSearchBar,priceFrom:item.name})
                  setPriceFromFilter({name:item.name,value:item.value})
                 } } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">{item.name}</p>
                }) }
              </div>
            }
          </div>

          <div onClick={()=> handleOnClickFormField('price-to') } className={` ${formActive === 'price-to' ? ' border-[#00000073] ' : ' border-[#e4e4e4] '}  text-[15px] tracking-wide  relative border-[1px] border-solid  bg-white px-4 py-3  gap-2 flex rounded-10px`} >
            <p className="">{valueOfSearchBar.priceTo}</p>
            <div className="w-3">
            <DownArrow/>
            </div>
            { !handleAllFormFields.priceTo &&
               <div className="absolute top-14  left-0 w-full h-[200px] overflow-y-scroll bg-white pt-2">
                { price_to_list.filter((item)=> priceFromFilter.value < item.value ).map((item)=>{   
                 return <p onClick={()=> setValueOfSearchBar({...valueOfSearchBar,priceTo:item.name}) } className="px-4 text-[#000000a6] hover:bg-slate-200 py-2">{item.name}</p>
                }) }
              </div>
            }
          </div>

          <div className="bg-[#000000] text-white px-6 py-3 rounded-10px">
            <button>Find</button>
          </div>
        </>}
        {
          mobileScreen && <>
            <div className="bg-black rounded-10px px-5 py-3 flex justify-center align-middle ">
            {/* <HamburgerLogo
            width="23"
            height="23"
            fill={'#FFF'}
            
          /> */}
          <span className="text-white ">&#9776;</span>
            </div>
          </>
        }
        {/* <div className="h-7 bg-pure-black rounded-20px my-5 w-[300px]"></div> */}
        {/* <div className="h-7 bg-pure-black rounded-20px my-5 w-[300px]"></div> */}
        {/* <div className="h-7 bg-pure-black rounded-20px my-5 w-[300px]"></div> */}
      </div>
  )
}
