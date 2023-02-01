import { useState } from "react";
import Prompt from "./components/Prompt/Prompt";
import Responses from "./components/Responses/Responses";

interface IArray {
  prompt: string;
  response: string | undefined;
}

function App() {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [responsesArray, setResponsesArray] = useState<IArray[]>([]);
  return (
    <div>
      <div className="flex flex-col">
        <Prompt
          prompt={prompt}
          setPrompt={setPrompt}
          setResponse={setResponse}
          setResponsesArray={setResponsesArray}
        />
        <Responses response={response} prompt={prompt} />
      </div>
    </div>
  );
}

export default App;
