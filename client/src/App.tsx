import { useState } from "react";
import Prompt from "./components/Prompt/Prompt";
import Responses from "./components/Responses/Responses";
import { IArray } from "./components/Prompt/Prompt";

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [responsesArray, setResponsesArray] = useState<IArray[]>(
    JSON.parse(localStorage.getItem("responses")!)
  );
  return (
    <div>
      <div className="flex flex-col">
        <Prompt
          prompt={prompt}
          setPrompt={setPrompt}
          responsesArray={responsesArray}
          setResponsesArray={setResponsesArray}
        />
        <Responses responsesArray={responsesArray} />
      </div>
    </div>
  );
};

export default App;
