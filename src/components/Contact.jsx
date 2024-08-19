import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0f0e17] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='font-bold text-4xl inline border-b-4 border-[#ff9900] text-[#a7a9be]'>Contact</p>
                <p className='text-[#a7a9be] py-4'></p>
            </div>
            <input className=' text-[#fffffe] bg-[#fffffe91]' type="text" id="" placeholder='Name' name='name'/>
            <input className='text-[#fffffe] my-4 p-2 bg-[#fffffe91]' type="email" id="" placeholder='Email' name='email'/>
            <textarea className='text-[#fffffe] bg-[#fffffe91] p-2' name="message" id="" placeholder='Message'></textarea>
            <button className='text-[#fffffe] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:border-[#fffffe] hover:bg-[#ff8906] '>Contact Me</button>
        </form>

    </div>
  )
}
