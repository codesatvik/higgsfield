import express from "express";
const app = express();
app.use(express.json());
import z from "zod"
import { CreateAvatarSchema, CreateUserSchema } from "./types";
import { prisma } from "./db";


app.post("/signup", async (req, res) => { 
    const { success, data } = CreateUserSchema.safeParse(req.body);
    if (!success) { 
        res.status(411).json({
            message:"incorrect credentials"
        })
        return;
    }
    const user = await prisma.user.create({
        data: {
             username : req.body.username,
             password : req.body.password
        }
    })
    res.json({message: "signed up",id :user.id})
})
app.post("/signin", (req, res) => { 
    res.json({})
})

app.post("/avatar", (req, res) => { 
    const { success, data } = CreateAvatarSchema.safeParse(req.body);
    if (!success) { 
        res.status(401).json({
            message: "incorrect"
        });
        return
    }
})

app.listen(3000)