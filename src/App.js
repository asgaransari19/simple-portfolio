import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import me from './pages/me'
import aboutMe from './pages/aboutMe';
import Asgar from './pages/Asgar';
import { pagePaths } from './utils/constant';
import Mywork from './pages/Mywork'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={pagePaths.asgar} component={Asgar} />
        <Route path={pagePaths.aboutme} component={aboutMe} />
        <Route path={pagePaths.me} component={me} />
        <Route path = {pagePaths.mywork} component={Mywork} />
      </Switch>

    </Router>
  );
}

export default App;
