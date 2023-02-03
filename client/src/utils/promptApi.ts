import axios from "axios";

export const promptApi = async (prompt: string) => {
  const APIKEY = process.env.REACT_APP_SECRET_KEY;
  let result: string | undefined;

  const client = axios.create({
    headers: {
      Authorization: "Bearer " + APIKEY,
    },
  });
  

  const params = {
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  try {
    const response = await client
  .post("https://api.openai.com/v1/completions", params);
    result = response.data.choices[0].text;
  } catch (error) {
    console.log(error);
  }

  return result;
};

