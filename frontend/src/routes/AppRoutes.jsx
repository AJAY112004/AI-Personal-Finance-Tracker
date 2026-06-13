import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Transactions from "../features/transactions/pages/Transactions";
import Budgets from "../features/budgets/pages/Budgets";
import Analytics from "../features/analytics/pages/Analytics";
import AIInsights from "../features/insights/pages/AIInsights";

// ADD THIS
import Login from "../features/auth/pages/Login";

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="transactions"
            element={<Transactions />}
          />

          <Route
            path="budgets"
            element={<Budgets />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="insights"
            element={<AIInsights />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;