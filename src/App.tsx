import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="technology" element={<Technology />} />
        <Route path="crew" element={<Crew />} />
      </Route>
    </Routes>
  );
}

export default App;
