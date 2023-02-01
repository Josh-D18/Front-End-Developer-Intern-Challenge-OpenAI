import React from "react";

interface IProps {
  response: string;
  prompt: string;
}

const Responses = (props: IProps) => {
  const { response, prompt } = props;
  return (
    <div className="flex flex-col justify-center items-center w-[600px] m-auto">
      <h2 className="text-[24px] font-bold pb-[10px] self-start">Responses</h2>
      <div className="flex flex-col justify-start items-start bg-slate-100 w-[600px] h-fit mb-10">
        <div className="flex pb-2 pt-[20px]">
          <p className="pl-5 pr-[55px] font-bold">Prompt:</p>
          <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px]">
            text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates delectus ratione quaerat veritatis, doloremque vero
            minus, magnam pariatur officia possimus consectetur nobis et sit
            sed? Voluptas eaque dolore cupiditate laudantium?
          </p>
        </div>
        <div className="flex">
          <p className="pl-5 pr-[40px] font-bold">Response:</p>
          <p className="font-[400] leading-[21px] text-left pb-[20px] pr-[20px]">
            text Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptates, hic velit incidunt magnam veritatis beatae iure est
            natus repudiandae porro molestias, illo, fugiat ex nam libero ipsum
            amet ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima consequuntur eligendi voluptas ipsam earum voluptatum
            accusantium dicta eius consequatur et, numquam tempore ea magnam!
            Perferendis laboriosam enim iusto eos rerum! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Corporis explicabo rerum
            exercitationem optio. Quos eius eum facere quod, laborum nihil odio
            aperiam et distinctio veniam nulla odit fugit, unde iste!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Responses;
