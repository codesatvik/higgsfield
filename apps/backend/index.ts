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
import { uuid } from "uuidv4"
import { createImage } from "./image";
import { generateVideo } from "./video";

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
  const leftProfileId = uuid();
  const rightProfileId = uuid();
  const frontProfileId = uuid();
  await Promise.all([
    createImage("Create a left side profile for the user. Given the image, create a portflio headshot from the left side of this user", data.image, `./assets/${leftProfileId}`),
    createImage("Create a right side profile for the user. Given the image, create a portflio headshot from the right side of this user", data.image, `./assets/${rightProfileId}`),
    createImage("Create a front side profile for the user. Given the image, create a portflio headshot from the front side of this user", data.image, `./assets/${frontProfileId}`)

  ])
  res.json({ message: "avatar created" });
});

app.post("/video", async (req, res) => {
  await generateVideo("pormpt for video ", 
   ["images"], "./output/video.mp4")
  res.json({});
})
app.listen(3000, () => {
  console.log("running on port 3000");
});
