import CreateAds from "./Component/Ads/CreateAds";
import MediaAd from "./Component/Ads/MediaAd";
import TextAd from "./Component/Ads/TextAd";
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/createads" element={<CreateAds />} />
        <Route exact path="/textad" element={<TextAd />} />
        <Route exact path="/mediaad" element={<MediaAd />} />
      </Routes>
    </div>
  );
}

export default App;
