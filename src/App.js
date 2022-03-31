import React from 'react'
import Login from "./components/login"
import Home from "./components/HomePage"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import { useRoutes, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      
       {/* <Routes>
          <Route path='/login' element={<Login/>} />
      </Routes> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
            {/* <Route path='/login' element={<Login/>} /> */}
        </Switch>
      </Router>
      {/* let routes = useRoutes (
        [
          {path:'/',element:<Login/>}
        ]
      )
      return routes; */}
    </div>
  );
}

export default App;
