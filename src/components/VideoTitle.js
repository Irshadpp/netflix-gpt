import React from 'react'
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg py-6 w-2/4'>{overview}</p>
      <div className='flex'>
        <button className='flex items-center px-10 bg-gray-500 p-1 text-xl bg-opacity-80 rounded-sm '>
            <FaPlay className=' text-white mr-1'/>
            Play</button>
        <button className=' flext items-center px-8 bg-gray-500 p-1 text-xl bg-opacity-80 rounded-sm mx-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
