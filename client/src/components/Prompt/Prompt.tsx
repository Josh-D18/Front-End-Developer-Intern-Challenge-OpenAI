import React from "react";
import { promptApi } from "../../utils/promptApi";
interface IProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setResponsesArray: React.Dispatch<
    React.SetStateAction<
      {
        prompt: string;
        response: string | undefined;
      }[]
    >
  >;
  responsesArray: {
    prompt: string;
    response: string | undefined;
  }[];
}

const Prompt: React.FC<IProps> = (props: IProps) => {
  const { prompt, setPrompt, setResponsesArray, responsesArray } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: string | undefined = await promptApi(prompt);
    
    setResponsesArray((prev) => [
      ...prev,
      {
        prompt: prompt,
        response: result,
      },
    ]);
    console.log(result,responsesArray);
    const responsesStringify = JSON.stringify(responsesArray);
    localStorage.setItem("responses", responsesStringify);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
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
              className="bg-sky-800 text-white py-[10px] px-[25px] rounded-[5%] mt-[5px] w-[100px] self-end"
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Prompt;
