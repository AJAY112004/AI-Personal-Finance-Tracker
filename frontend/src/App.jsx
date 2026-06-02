import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/logoin";
import Forgot from "./pages/Forgot";
import CreateAccount from "./pages/CreateAccount";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Analytics from "./pages/Analytics";
import AI_Insights from "./pages/AI_Insights";

import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/forgot"
          element={<Forgot />}
        />

        <Route
          path="/create-account"
          element={<CreateAccount />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route
          path="/budgets"
          element={<Budgets />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/ai-insights"
          element={<AI_Insights />}
        />

        {/* User */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;