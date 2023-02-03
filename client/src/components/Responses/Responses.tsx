import React, { useEffect, useState } from "react";

const Responses: React.FC = () => {
  /*eslint-disable */
  const [displayResults, _] = useState<string | null>(
    localStorage.getItem("responses")
  );
  const [responsesParsed, setResponsesParsed] = useState([]);
  /*eslint-enable */

  useEffect(() => {
    setResponsesParsed(JSON.parse(displayResults!))
    console.log("Hello", displayResults)
  },[displayResults])

  return (
    <div className="flex flex-col justify-center items-center w-[320px] md:w-[420px] lg:w-[600px] m-auto">
      <h2 className="text-[24px] font-bold pb-[10px] self-start">Responses</h2>
      <div className="flex flex-col justify-start items-start w-full h-fit mb-10">
        {responsesParsed ? responsesParsed.map((results:any, id: number) => {
           return <div className="w-full h-full mb-5 bg-slate-100" key={id}>
           <div className="flex pb-2 pt-[20px] flex-col lg:flex-row">
             <p className="pl-5 pr-[55px] font-bold">Prompt:</p>
             <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px] pl-[20px] pt-[3px] lg:pl-[0px] lg:pt-[0px]">
              {results.prompt}
             </p>
           </div>
           <div className="flex flex-col lg:flex-row">
             <p className="pl-5 pr-[40px] font-bold">Response:</p>
             <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px] pl-[20px] pt-[3px] lg:pl-[0px] lg:pt-[0px]">
               {results.response}
             </p>
           </div>
           </div>
        }): <p>Please Ask A Question In The Text Box</p>}  
      </div>
    </div>
  );
};

export default Responses;
