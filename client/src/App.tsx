import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element="MainLayout">
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
