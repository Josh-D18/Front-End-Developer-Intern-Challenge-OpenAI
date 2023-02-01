import { Configuration, OpenAIApi } from "openai";

export const promptApi = async (prompt: string) => {
  const APIKEY = process.env.REACT_APP_SECRET_KEY;
  let result: string | undefined;

  const configuration = new Configuration({
    apiKey: APIKEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  result = response.data.choices[0].text;

  return result;
};
