import './App.css';
import AppNavigator from './components/AppNavigator';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ColorScreen from './container/ColorScreen';

function App() {
  return (
    <Router >
      <AppNavigator />
      <Route exact path="/colorScreen/:color" component={ColorScreen}/>
    </Router>
  );
}

export default App;
