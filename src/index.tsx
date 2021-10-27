import * as ReactDOM from 'react-dom'
import App from '@Pages/App'
import { store } from '@App/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
