// import logo from './logo.svg';ss
import './App.css';
import Homepage from './container/Homepage/Homepage';
import AddContent from './container/AddContent/AddContent';
import Navbar from './container/Navbar/Navbar';
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (<div>
    
    <Router>
       <Navbar/>
   <Switch>
         
          <Route path="/"exact>
            <Homepage />
          </Route>
          <Route path="/addNews" component={AddContent}/>
          
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
