import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/DashboardLayout'
function Controller() {
  return (
    <div>
      <Router>
        <DashboardLayout>
          this is dashboard
        <Switch>
        </Switch>
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default Controller;