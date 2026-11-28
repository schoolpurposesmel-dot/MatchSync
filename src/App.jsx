import { useEffect } from 'react';
import HomePage from './components/homepage/HomePage';
import DashboardPage from './components/dashboard/DashboardPage';
import AuthPage from './components/auth/AuthPage';
import useHashRoute from './hooks/useHashRoute.jsx';
import Scrims from './components/scrim/Scrims';
import UserTeamProfilePage from './components/profile/UserTeamProfilePage';
import CreateTournamentPage from './components/tournament/CreateTournamentPage';
import TournamentListPage from './components/tournament/TournamentListPage';
import ScoreSubmissionPage from './components/score/ScoreSubmissionPage';

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
    case 'profile':
      return <UserTeamProfilePage />;
    case 'create-tournament':
      return <CreateTournamentPage />;
    case 'tournaments':
      return <TournamentListPage />;
    case 'submit-score':
      return <ScoreSubmissionPage />;
    default:
      return <HomePage />;
  }
}

export default App;