import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { lazy, Suspense } from "react";
import Fika from "./components/Fika/Fika";
import NUMedia from "./components/Brand Dynamics/NUMedia";
import PortableKitchen from "./components/Portable Kitchen/PortableKitchen";
import Transport from "./components/Transport/Transport";

const Advertising = lazy(() =>
  import("./components/Brand Dynamics/Advertising")
);
const Event = lazy(() => import("./components/Brand Dynamics/Event"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand-dynamics-advertising" element={<Advertising />} />
          <Route path="/brand-dynamics-event" element={<Event />} />
          <Route path="/nu-media" element={<NUMedia />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/portable-kitchens" element={<PortableKitchen />} />
          <Route path="/fika-innovation" element={<Fika />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
