import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'

const RestarauntMenu = () => {

    const[resinfo,setInfo]=useState([])

    useEffect(()=>{
        Fetchmenu()
    })

    const Fetchmenu=async()=>{
        const data= await fetch("https://mocki.io/v1/93635556-84b5-47f4-9b31-4155830e94e0")

        const json=await data.json()

    
        setInfo(json)
    }

    
  return (
    <>
<Navbar/>



    </>
  )
}

export default RestarauntMenu