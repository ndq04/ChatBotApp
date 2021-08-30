import Header from './components/Header'
import Message from './components/MessageList'
import {Container} from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <Header />
      <Message />
    </Container>
  )
}

export default App
