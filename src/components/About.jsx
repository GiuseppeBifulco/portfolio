import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0f0e17] text-[#fffffe]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ff9900]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Lorem Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa. 
            </p>
          </div>
          <div>
            <p>Lorem Ipsum è considerato il testo
              segnaposto standard sin dal sedicesimo secolo, quando un anonimo
              tipografo prese una cassetta di caratteri e li assemblò per
              preparare un testo campione.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
