import {useState} from 'react'
import axios from 'axios'

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
            msgPeople: state.message,
            imgPeople: './avatar.jpg',
          }
          const chatbot = {
            from: 'chatbot',
            msgChatbot: res.data,
            imgBot: './bot.png',
          }
          newChat.push(people, chatbot)
          setState({
            ...state,
            newChat,
          })
          console.log(state)
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div>
      <div style={{height: '50vh'}}>
        {state.chat.map((msg, i) => (
          <div key={i}>
            <h1>{msg.msgPeople}</h1>
            <img
              src={msg.imgPeople}
              width='50px'
              alt={msg.imgPeople}
            />
            {new Date().getTime().toLocaleString()}
            <h1>{msg.msgChatbot}</h1>
            <img
              src={msg.imgBot}
              width='50px'
              alt={msg.imgBot}
            />
          </div>
        ))}
      </div>
      <div style={{height: '20vh'}}>
        <input
          type='text'
          name='message'
          value={state.message}
          onChange={handleChange}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Message
