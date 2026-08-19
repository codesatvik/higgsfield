import { BrowserRouter, Route, Routes } from "react-router";
import { Appbar } from "./components/appbar";
import { Button } from "./components/ui/button";
import "./index.css";
import { LandingPage } from "./pages/landing";
import { Singup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { VideoCreator } from "./pages/videoCreator";

export function App() {
  return <div>
   
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/signup" element={ <Singup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video-creator" element={ <VideoCreator />} />
     </Routes>
    </BrowserRouter>
  </div>
}

export default App;
