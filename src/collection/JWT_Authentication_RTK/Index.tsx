import { Provider } from 'react-redux'
import { store } from './redux/store'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const Index = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Index
