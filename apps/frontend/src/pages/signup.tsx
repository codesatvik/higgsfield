import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

async function signup({ username, password }: { username: string, password: string }) { 
    const response = await axios.post("http://localhost:3000/signup", { 
        username,
        password
    })
    return response.data
}

export function Signup() { 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: signup,
        onSuccess: () => { 
           navigate("/signin")
        }
    })
    



    return <div className="h-screen w-screen flex">
        <div className="flex-1 min-h-screen bg-black  "></div>
        <div className="flex-1 screen">
            <div className="h-full flex items-center justify-center">
                <Card className="p-8">
                   <Input placeholder="Username" type="username"onChange={(e)=> setUsername(e.target.value)}></Input>
                    <Input placeholder="Password" type="password"onChange={(e)=> setPassword(e.target.value)}></Input>
                    <Button variant={"outline"}  onClick={() => {
                        try { mutation.mutate({ username, password })} catch (e) { alert("error")}
                     }}> Submit </Button>
                </Card>
            </div>
            
       </div>
    </div>
}