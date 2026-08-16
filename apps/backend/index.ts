import express, { response } from "express";
import fs from "fs";
import path from "path";
const app = express();
app.use(express.json());
import z from "zod";
import { CreateAvatarSchema, CreateUserSchema } from "./types";
import { prisma } from "./db";
import axios from "axios";
import { InferenceClient } from "@huggingface/inference";
import { GoogleGenAI } from "@google/genai";

// const client = new InferenceClient(process.env.HF_TOKEN);
const ai = new GoogleGenAI({ apiKey: process.env.Google_apikey });
app.post("/signup", async (req, res) => {
  const { success, data } = CreateUserSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "incorrect credentials",
    });
    return;
  }
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  res.json({ message: "signed up", id: user.id });
});
app.post("/signin", (req, res) => {
  res.json({});
});
app.post("/avatar", async (req, res) => {
  const { success, data } = CreateAvatarSchema.safeParse(req.body);
  if (!success) {
    res.status(401).json({
      message: "incorrect",
    });
    return;
  }
  const base64Image = await axios
    .get(data.image, {
      responseType: "arraybuffer",
    })
    .then((response) =>
      Buffer.from(response.data, "binary").toString("base64"),
    );
  const prompt = [
    {
      type: "text",
      text: "Create a left side profile for the user. Given the image, create a portflio headshot from the left side of this user ",
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
    fs.writeFileSync("./assets/gemini-native-image.png", buffer);
    console.log("Image saved as gemini-native-image.png");
  }
  res.json({ message: "avatar created" });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
