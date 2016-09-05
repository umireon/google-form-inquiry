import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import LoaderContainer from './containers/LoaderContainer'
import ConfigContainer from './containers/ConfigContainer'
import NotifyTemplateContainer from './containers/NotifyTemplateContainer'
import ReplyTemplateContainer from './containers/ReplyTemplateContainer'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={LoaderContainer}>
            <IndexRoute component={ConfigContainer} />
            <Route path="notify-template" component={NotifyTemplateContainer} />
            <Route path="reply-template" component={ReplyTemplateContainer} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
