import SkillsTabIcon from './SkillsTabIcon'
import {skills} from '../skills'
//implementata la libreria per la key univoca 
import uniqid from 'uniqid';

import React from 'react'

export default function Skills() {
    
  return (
    <div name='skills' className='w-full h-screen text-[#fffffe] bg-[#0f0e17]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff9900]'>Skills</p>
                <p className='py-4'>Tecnology with i Work</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {
                    skills.map((skill) => (
                        <SkillsTabIcon key={uniqid()} skill={skill}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
