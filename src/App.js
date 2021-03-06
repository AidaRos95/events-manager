import React, { Component } from 'react';
import store from './store.js'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer.js';
import EventDetailsContainer from './components/EventDetailsContainer.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path='/' exact component={EventsListContainer} />
          <Route path="/events/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    )
  }
}

export default App;
