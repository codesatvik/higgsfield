import axios from "axios";
import { GoogleGenAI } from "@google/genai"
const ai = new GoogleGenAI({ apiKey: process.env.Google_apikey });
import fs from "fs"

export async function createImage(userPrompt:string, imageUrl:string, outputFilePath: string ) { 
  const base64Image = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64"),
    );
  const prompt = [
    {
      type: "text",
      text: userPrompt
    },
    {
      type: "image",
      mime_type: "image/png",
      data: base64Image,
    },
  ];
 
  const interaction = await ai.interactions.create({
    model: "gemini-3.1-flash-image",
    input: prompt,
  });
  const generatedImage = interaction.output_image;
  if (generatedImage) {
    const buffer = Buffer.from(generatedImage.data, "base64");
    fs.writeFileSync(outputFilePath, buffer);
    console.log("Image saved");
  }
}