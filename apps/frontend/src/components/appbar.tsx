import { Button } from "./ui/button";
import { useNavigate } from "react-router"

export function Appbar() { 
    const navigate = useNavigate();
    return <div className="bg-black text-white flex justify-between w-screen">
      <div className="p-4 text-xl">
        Higgsfield
      </div>
      <div className="flex">
        <div className="flex item-center p-2">
                <Button variant={"outline"} onClick={() => { navigate("/signup")}}>signup</Button></div>
        <div className="flex item-center p-2">
        <Button variant={"outline"}onClick={() => { navigate("/signin")}}>signin</Button> </div>  
      </div>
     </div>
    
    
}