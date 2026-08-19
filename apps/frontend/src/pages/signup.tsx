import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Singup() { 
    return <div className="h-screen w-screen flex">
        <div className="flex-1 min-h-screen bg-black  "></div>
        <div className="flex-1 screen">
            <div className="h-full flex items-center justify-center">
                <Card className="p-8">
                  <Input placeholder="Username" type="username"></Input>
                    <Input placeholder="Password" type="password"></Input>
                    <Button variant={"outline"} onClick={() => { }}> Submit </Button>
                </Card>
            </div>
            
       </div>
    </div>
}