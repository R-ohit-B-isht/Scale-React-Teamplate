import { ThemeProvider } from '@context/ThemeContext';
import { AuthGuard } from '@guards/AuthGuard';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/home';
import Login from '@pages/login/login';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import './App.css';

const ProtectedLayout = () => {
  return (
    <AuthGuard>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AuthGuard>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.DASHBOARD} element={<Home />} />
          </Route>
          
          {/* Redirect for unknown routes */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
