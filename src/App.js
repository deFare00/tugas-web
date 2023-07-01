import './assets/css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Details from './pages/Details';



function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/categories/:idc' component={Details} />
      </Router>
    </div>
  );
}

export default App;
