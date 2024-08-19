import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
//Aggiunta la libreria react scroll per implementare lo scroll automatico cliccando sui pulsanti
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className="w-full h-screen bg-[#0f0e17]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#ff8906] text-xl font-bold">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#fffffe]">Giuseppe Bifulco</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#fffffe]">Im a dev</h2>
        <p className="text-[#a7a9be] px-4 max-w-[700px]">
          Lorem Ipsum è un testo segnaposto utilizzato nel settore della
          tipografia e della stampa. Lorem Ipsum è considerato il testo
          segnaposto standard sin dal sedicesimo secolo, quando un anonimo
          tipografo prese una cassetta di caratteri e li assemblò per preparare
          un testo campione.
        </p>
        <div>
            <button type="button" className="group text-[#fffffe] border-2 px-6 py-3 my-2 flex items-center hover:border-[#fffffe] hover:bg-[#ff8906] ">
            <Link to="work" smooth={true} duration={500}>View My Work</Link>
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>    
            </button>
        </div>
      </div>
    </div>
  );
}
