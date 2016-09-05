import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './App'

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

ReactDOM.render(
  <App store={store} />,
  document.getElementById('react-mount')
)
