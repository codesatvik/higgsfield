import { BrowserRouter, Route, Routes } from "react-router";
import { Appbar } from "./components/appbar";
import { Button } from "./components/ui/button";
import "./index.css";
import { LandingPage } from "./pages/landing";
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
import { VideoCreator } from "./pages/videoCreator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export function App() {
  return <div>
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/signup" element={ <Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/video-creator" element={ <VideoCreator />} />
     </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </div>
}

export default App;
