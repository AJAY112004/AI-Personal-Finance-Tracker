import { Routes, Route } from "react-router-dom";

import Login from "./pages/logoin";
import Forgot from "./pages/Forgot";
import CreateAccount from "./pages/CreateAccount";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Analytics from "./pages/Analytics";
import AIInsights from "./pages/AI_Insights";

import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/create-account" element={<CreateAccount />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/budgets" element={<Budgets />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/aiinsights" element={<AIInsights />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />

    </Routes>
  );
}

export default App;