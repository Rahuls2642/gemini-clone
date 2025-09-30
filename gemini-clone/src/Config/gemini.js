

import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY ="AIzaSyBVastMNHM1JrN7sFD1YVETw1J5bvJXLFI";

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default main;