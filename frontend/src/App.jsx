import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/pages/logoin";
import Forgot from "../src/Pages/Forgot";
import CreateAccount from "../src/pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;