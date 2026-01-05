import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import ButtonDemo from "./Components/Button/ButtonDemo";
import InputView from "./Components/Input/InputView";
import ToggleView from "./Components/Input/InputView";
import LoaderPage from "./Components/Loader/LoaderPage";
import CardPage from "./Components/Card/CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="button" element={<ButtonDemo />} />
        <Route path="input" element={<InputView />} />
        <Route path="toggle" element={<ToggleView />} />
        <Route path="loader" element={<LoaderPage />} />
        <Route path="card" element={<CardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
