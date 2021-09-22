import {useState} from 'react'
import axios from 'axios'

const Chatbot = () => {
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
  const handleSend = (e) => {
    e.preventDefault()
    if (state.message !== '') {
      axios
        .post('http://127.0.0.1:2000/api/chatbot', {
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
    <div className='chatbot'>
      <div className='message__content'>
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
      <div className='message__send'>
        <div className='input-wrapper'>
          <form onSubmit={handleSend}>
            <input
              type='text'
              name='message'
              value={state.message}
              onChange={handleChange}
            />
            <div className='send-icon'>
              <i
                className='fad fa-paper-plane'
                onClick={handleSend}
              ></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
