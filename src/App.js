import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Scholars from './pages/Scholars';
import LeaderBoard from './pages/LeaderBoard';
import Payments from './pages/Payments';
import Settings from './pages/Settings';

import './assets/styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Dashboard} />
        <Route path="/scholars" component={Scholars} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/payments" component={Payments} />
        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>    
  );
}

export default App;
