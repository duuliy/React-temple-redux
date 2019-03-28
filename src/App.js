import React, { PureComponent } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {routes} from '@src/routers/routes';



class App extends PureComponent {
  render() {
    return (
      <Router >
        <div className="App">
          <Switch>
          <Route exact path='/' render={()=> <Redirect to='/home'/>} />
            {
               routes.map((Item, index) => {
                 return(
                   <Route
                      key={index}
                      path={Item.path}
                      exact={Item.exact}
                      render={ props => {
                      return (    
                          <Item.component
                            {...props}
                            routes={Item.routes}
                           />
                           )}}
                    ></Route>)
                })
              }
          </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
