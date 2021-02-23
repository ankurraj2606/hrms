import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/DashboardLayout'
import Home from './screens/home/Home'
import Recruitment from './screens/recruitment/Recruitment'
import Onboarding from './screens/onboarding/Onboarding';
import Calendar from './screens/calendar/Calendar';
import Reports from './screens/reports/Reports';
import Settings from './screens/settings/Settings';
function Controller() {
  return (
    <div>
      <Router>
        <DashboardLayout>
        <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="/recruitment" render={(props) => <Recruitment {...props} />} />
            <Route exact path="/onboarding" render={(props) => <Onboarding {...props} />} />
            <Route path="/calendar" render={(props) => <Calendar {...props} />} />
            <Route exact path="/reports" render={(props) => <Reports {...props} />} />
            <Route path="/settings" render={(props)=><Settings {...props}/>}/>
        </Switch>
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default Controller;