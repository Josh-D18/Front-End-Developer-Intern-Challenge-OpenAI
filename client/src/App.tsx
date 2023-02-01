import { useState } from "react";
import Prompt from "./components/Prompt/Prompt";
import Responses from "./components/Responses/Responses";

interface IArray {
  prompt: string;
  response: string | undefined;
}

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [responsesArray, setResponsesArray] = useState<IArray[]>([]);
  return (
    <div>
      <div className="flex flex-col">
        <Prompt
          prompt={prompt}
          setPrompt={setPrompt}
          setResponsesArray={setResponsesArray}
          responsesArray={responsesArray}
        />
        <Responses />
      </div>
    </div>
  );
};

export default App;
