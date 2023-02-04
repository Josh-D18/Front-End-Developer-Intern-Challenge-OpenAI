import React, { useEffect, useState } from "react";
import { promptApi } from "../../utils/promptApi";
interface IProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setResponsesArray: React.Dispatch<React.SetStateAction<IArray[]>>;
  responsesArray: IArray[];
}

export interface IArray {
  prompt: string;
  response: string | undefined;
}

const Prompt: React.FC<IProps> = (props: IProps) => {
  const { prompt, setPrompt, responsesArray, setResponsesArray } = props;

  const [hasSubmit, setHasSubmit] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: string | undefined = await promptApi(prompt);

    setResponsesArray((prev) => {
      if (prev === null) {
        return [
          {
            prompt: prompt,
            response: result,
          },
        ];
      }
      return [
        ...prev,
        {
          prompt: prompt,
          response: result,
        },
      ];
    });
    setHasSubmit(true);
  };
  useEffect(() => {
    const responsesStringify = JSON.stringify(responsesArray);
    if (hasSubmit) {
      localStorage.setItem("responses", responsesStringify);
      setHasSubmit(false);
    }
  }, [responsesArray, hasSubmit]);
  return (
    <div>
      <div>
        <form
          onSubmit={async (e) => await handleSubmit(e)}
          className="flex items-center justify-center flex-col my-[25px]"
        >
          <label className="flex flex-col">
            <h1 className="text-3xl font-bold text-left pb-6">Fun with AI</h1>
            <span className="font-bold block text-left text-[16px] pb-[6px]">
              Enter prompt
            </span>
            <textarea
              value={prompt}
              onChange={handleChange}
              className="border-solid border-grey border-[2px] w-[320px] md:w-[420px] lg:w-[600px] h-[200px] block p-2"
              required
            />
            <input
              type={"submit"}
              value="submit"
              className="bg-sky-800 text-white py-[10px] px-[25px] rounded-[5%] mt-[5px] w-[100px] self-end cursor-pointer hover:bg-blue-400"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Prompt;
