import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import ItemList from './components/ItemList';
import NewItemForm from './components/NewItemForm';
import ItemDetail from './components/ItemDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          React Recipe App
          <Switch>
            <Route path="/new" component={NewItemForm} />
            <Route path="/:id" component={ItemDetail} />
            <Route path="/" component={ItemList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
