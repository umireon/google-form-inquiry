import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
)

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('react-mount')
  )
}

render(App)

/* global module, require */
if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default)
    render(App)
  })
}
