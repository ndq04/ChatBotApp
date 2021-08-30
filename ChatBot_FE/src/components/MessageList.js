import {useState} from 'react'
import axios from 'axios'
import {AppBar, Toolbar} from '@material-ui/core'

const Message = () => {
  const [state, setState] = useState({
    chat: [],
    message: '',
  })

  const handleChange = (e) => {
    setState({
      ...state,
      message: e.target.value,
    })
  }

  const handleSend = () => {
    if (state.message !== '') {
      axios
        .post('http://127.0.0.1:2000/get', {
          message: state.message,
        })
        .then((res) => {
          const newChat = state.chat
          const people = {
            from: 'people',
            message: state.message,
            img: './avatar.jpg',
          }
          const chatbot = {
            from: 'chatbot',
            message: res.data,
            img: './bot.png',
          }
          newChat.push(people, chatbot)
          setState({
            ...state,
            newChat,
            message: '',
          })
          console.log(state)
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div>
      <div style={{height: '70vh', overflowY: 'auto'}}>
        {state.chat.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent:
                  msg.from === 'people' ? 'flex-end' : '',
              }}
            >
              {msg.from === 'people' ? (
                <>
                  <div>{msg.message}</div>
                  <img
                    src={msg.img}
                    width='50px'
                    alt={msg.img}
                  />
                </>
              ) : (
                <>
                  <img
                    src={msg.img}
                    width='50px'
                    alt={msg.img}
                  />
                  <div>{msg.message}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{height: '20vh'}}>
        <AppBar position='static'>
          <Toolbar>
            <input
              type='text'
              name='message'
              value={state.message}
              onChange={handleChange}
            />
            <button onClick={handleSend}>Send</button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Message
