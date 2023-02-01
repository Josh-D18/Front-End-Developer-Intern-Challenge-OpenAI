import React, { useState } from "react";

const Responses: React.FC = () => {
  /*eslint-disable */
  const [displayResults, _] = useState<string | null>(
    localStorage.getItem("responses")
  );
  /*eslint-enable */

  return (
    <div className="flex flex-col justify-center items-center w-[320px] md:w-[420px] lg:w-[600px] m-auto">
      <h2 className="text-[24px] font-bold pb-[10px] self-start">Responses</h2>
      <div className="flex flex-col justify-start items-start bg-slate-100 w-full h-fit mb-10">
        <div className="flex pb-2 pt-[20px] flex-col lg:flex-row">
          <p className="pl-5 pr-[55px] font-bold">Prompt:</p>
          <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px] pl-[20px] pt-[3px] lg:pl-[0px] lg:pt-[0px]">
            What is your name?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="pl-5 pr-[40px] font-bold">Response:</p>
          <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px] pl-[20px] pt-[3px] lg:pl-[0px] lg:pt-[0px]">
            My name is John.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Responses;
