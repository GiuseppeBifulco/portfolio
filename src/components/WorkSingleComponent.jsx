import React from 'react'
import WorkImg from '../assets/WorkImg.png'

export default function WorkSingleComponent() {
  return (
    <div style={{backgroundImage: `url(${WorkImg})`}}  className='shadow-lg shadow-[black] group container rounded-md flex justify-center items-center mx-auto content-div'>
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-[#fffffe] tracking-wider'>
                React Js Project
            </span>
            <div className='pt-8 text-center'>
                <a href="">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ff9900] text-[#fffffe] font-bold text-lg hover:border-[#fffffe] border-2'>Demo</button>
                </a>
                <a href="">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#ff9900] first-line:text-[#fffffe] font-bold text-lg hover:border-[#fffffe] border-2'>Code</button>
                </a>
            </div>
        </div>
    </div>
  )
}
