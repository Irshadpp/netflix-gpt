import React from 'react'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[18%] px-12'>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='text-lg py-6 w-2/4 text-white'>{overview}</p>
      <div className='flex'>
        <button className='flex items-center px-10 bg-white p-1 font-semibold text-xl bg-opacity-80 rounded-sm hover:opacity-70'>
            <FaPlay className=' text-black opacity-80 mr-1'/>
            Play</button>
        <button className=' flex items-center px-4 bg-black p-[6px] font-semibold text-xl text-white bg-opacity-40 hover:bg-opacity-20 rounded-sm mx-2'> <AiOutlineInfoCircle size={25} className='text-white mr-1'/> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
