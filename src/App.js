import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// contexts
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";

// layouts
import AuthRoutes from "./layouts/auth";
import AdminRoutes from "./layouts/admin";

// views
import Login from "./views/auth/login/Login";
import Join from "./views/auth/join/Join";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router basename="WorkVisual">
          <Routes>

            <Route path={"/login"} element={<Login />} />
            <Route path={"/Join"} element={<Join />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<AdminRoutes />} />
            </Route>

          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
