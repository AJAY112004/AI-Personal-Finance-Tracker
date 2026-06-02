import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/pages/logoin";
import Forgot from "../src/Pages/Forgot";
import CreateAccount from "../src/pages/CreateAccount";
import Dashboard from "../src/pages/Dashboard";
import Logout from "../src/pages/Logout";
import Profile from "../src/pages/Profile";
import AI_Insights from "../src/pages/AI_Insights";
import Analytics from "../src/pages/Analytics";
import Budgets from "../src/pages/Budgets";
import Transactions from "../src/pages/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Budgets" element={<Budgets />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/AIInsights" element={<AI_Insights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;