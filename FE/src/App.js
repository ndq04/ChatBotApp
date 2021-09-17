import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './components/Header'
import Message from './components/MessageList'
import Chatbot from './components/Chatbot'
import Error from './components/Error'

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Message} />
          <Route path='/chat' component={Chatbot} />
          <Route path='/*' component={Error} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
