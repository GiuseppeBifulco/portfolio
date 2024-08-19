import React from 'react'
import WorkSingleComponent from './WorkSingleComponent'

export default function Work() {
  return (
    <div name="work" className='w-full md:h-screen bg-[#0f0e17] text-[#fffffe]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9900] text-[#fffffe]'>Work</p>
                <p className='py-6 text-[#fffffe]'>My recent Work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <WorkSingleComponent/>
            </div>
        </div>
    </div>
  )
}
