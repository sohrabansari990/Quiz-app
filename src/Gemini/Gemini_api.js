import { GoogleGenAI, Type } from "@google/genai";

const Api_key = 'AIzaSyDthFujEU2eBQ78OgfNiClbOODSJmPOI2A'
const ai = new GoogleGenAI({ apiKey: Api_key });

async function main(topic) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      `Generate 10 multiple-choice quiz questions about "${topic}".
                 Each question must have option1, option2, option3, option4,
                 and specify the correct one in "answer". Return JSON array only.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: {
              type: Type.STRING,
            },
            option1: {
              type: Type.STRING,
            },
            option2: {
              type: Type.STRING,
            },
            option3: {
              type: Type.STRING,
            },
             option4: {
              type: Type.STRING,
            },
            answer: {
              type: Type.STRING,
            },
          },
          propertyOrdering: ["question", "option1","option2","option3","option4", "answer"],
        },
      },
    },
  });

//   console.log(response.text);
  return response.text
}

export default main;