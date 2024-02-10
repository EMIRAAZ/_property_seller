import React, { useEffect } from 'react'
import "./index.css"

function TitleComponent({titleOne,titleTwo,className,classTitleOne,classTitleTwo}) {

  useEffect(()=>{
    console.log('TitleComponent')
  },[])

  return (
    <div className={`${className}`}>
      <h1 className={`${classTitleOne}`}>{ titleOne && titleOne}</h1>
      <h2 className={`${classTitleTwo}`}>{ titleTwo && titleTwo}</h2>
    </div>
  )
}

export default TitleComponent