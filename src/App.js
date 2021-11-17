import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import Knowledges from './pages/Knowledges';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
   <>
      <BrowserRouter>
      <Switch>
       <Route  path = "/" exact component = {Home} />
       <Route path = "/contact"  component = {Contact} />
       <Route path = "/portfolio"  component = {Portfolio} />
       <Route path = "/knowledges"  component = {Knowledges} /> 
       <Route component = {NotFound} />
       </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;