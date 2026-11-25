import { useEffect } from 'react';
import HomePage from './components/homepage/HomePage';
import DashboardPage from './components/dashboard/DashboardPage';
import AuthPage from './components/auth/AuthPage';
import useHashRoute from './hooks/useHashRoute.jsx';
import Scrims from './components/scrim/Scrims';

function App() {
  const route = useHashRoute();

  // Start each page at the top when switching between pages.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  switch (route) {
    case 'login':
      return <AuthPage mode="login" />;
    case 'register':
      return <AuthPage mode="register" />;
    case 'dashboard':
      return <DashboardPage />;
    case 'scrims':
      return <Scrims />;
    default:
      return <HomePage />;
  }
}

export default App;
