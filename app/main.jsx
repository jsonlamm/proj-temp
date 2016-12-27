// gram

'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'

// import router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import components
// import Root from './components/Root.js'
import CampusComp from './components/Campus.js'
import StudentsComp from './components/Students.js'


const router = (
<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>

          <Route path="campus" component={CampusComp}>
            <Route path="/campus/:studentId" component={StudentsComp} />
          </Route>

      </Route>

    </Router>

  </Provider>
)

render (
  <Root />,
  document.getElementById('main')
)

    // was in render: <Root/>