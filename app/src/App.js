import "./App.css";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "./views/WeatherPage";
import HomePage from "./views/Home";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <body>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-weather" element={<WeatherPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
