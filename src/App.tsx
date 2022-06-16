import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import DestinationLayout from "./components/Destination/DestinationLayout";
import Technology from "./pages/Technology";
import DestinationDetail from "./components/Destination/DestinationDetail";
import { useEffect, useState } from "react";
import DataContext from "./context/data";

function App() {
  const [data, setData] = useState(null);
  // fetch data and Provide dat via context
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => alert(error));
  }, []);

  if (!data) {
    return <p>Loading....</p>;
  }

  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<DestinationLayout />}>
            <Route index element={<Destination />} />
            <Route path=":destination" element={<DestinationDetail />} />
          </Route>
          <Route path="technology" element={<Technology />} />
          <Route path="crew" element={<Crew />} />
        </Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
