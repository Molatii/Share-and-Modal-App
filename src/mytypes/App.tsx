import Team from '../components/team';
import Single from '../components/single';
import Multiplyer from '../components/multiPlayer';
import Show from '../components/showButtons';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
                            
            <Route  path='/' exact>            
                <Show/>      
            </Route>  
                      
            <Route  path='/Single'>
              <Single/>                                
            </Route>

            <Route  path='/Multiplyer'>
              <Multiplyer/>
            </Route>

            <Route  path='/Team'>
              <Team/>
            </Route>

        </Switch>
     
    </div>
  );
}

export default App;
