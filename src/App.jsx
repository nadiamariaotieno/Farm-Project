import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Livestock from "./pages/Livestock";
import Inventory from "./pages/Inventory";
import Health from "./pages/Health";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import RequireAuth from "./routing/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout>
              <Dashboard />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path="/livestock"
        element={
          <RequireAuth>
            <Layout>
              <Livestock />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path="/inventory"
        element={
          <RequireAuth>
            <Layout>
              <Inventory />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path="/health"
        element={
          <RequireAuth>
            <Layout>
              <Health />
            </Layout>
          </RequireAuth>
        }
      />
      <Route
        path="/reports"
        element={
          <RequireAuth>
            <Layout>
              <Reports />
            </Layout>
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;