import React from 'react'
import Data from './Data/Value'
import { useState } from 'react'
export default function App() {
  const[count,setCount]=useState(1)
  const inCriment=()=>{
    setCount(count+1);
  }
  const inDecriment=()=>{
    setCount(count-1);
  }
  return (
    <>
    <div className='max-w-[1320px] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mt-5 gap-2 sm:mb-20 text-2xl font-mono'>
      {Data.map((item)=>(
        <div className="bg-[#eeeeee] mx-auto border-[3px] border-sky-300 p-4 w-[300px] h-auto capitalize shadow-2xl rounded-2xl mb-2 relative group hover:text-white hover:bg-black backdrop-blur-xs duration-1000 transition-all hover:border-black hover:shadow-black" key={item.id}>
          <h1 className="">name: {item.name}</h1>
          <h1 className="">Roll: {item.Roll}</h1>
          <h1 className="">student: {item.student?"Yes":"No"}</h1>
          <h1 className="">Roll: {item.Markes>60?"Pass":"Fail"}({item.Markes})</h1>
          <img src={item.img} alt="image" className='absolute top-[50px] right-5'/>
        </div>
      ))}
     <br/>
    </div>
    <div className="flex text-2xl font-bold">
      <button className='bg-green-600 m-1 rounded-[50%] h-[50px] w-[50px]' onClick={inCriment}>+</button>
      <h1 className="border-2 w-30 h-[50px] p-5">{count}</h1>
      <button className='bg-green-600 m-1 rounded-[50%] h-[50px] w-[50px] ' onClick={inDecriment}>-</button>
     </div>
</>
  )
}
