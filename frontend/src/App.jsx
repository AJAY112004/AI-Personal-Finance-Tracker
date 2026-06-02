import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/logoin";
import Forgot from "./pages/Forgot";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import AI_Insights from "./pages/AI_Insights";
import Analytics from "./pages/Analytics";
import Budgets from "./pages/Budgets";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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