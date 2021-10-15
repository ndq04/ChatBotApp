import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {FaPaperPlane} from 'react-icons/fa'

const Chatbot = () => {
  const {isToggle} = useContext(ThemeContext)

  const messageEl = useRef(null)
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
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener(
        'DOMNodeInserted',
        (event) => {
          const {currentTarget: target} = event
          target.scroll({
            top: target.scrollHeight,
            behavior: 'smooth',
          })
        }
      )
    }
  }, [])
  return (
    <div className={isToggle ? 'chatbot dark' : 'chatbot'}>
      <div className='chatbot_header'>
        <div className='chatbot_header-left'>
          <div className='image image-status'>
            <img src='./bot.png' alt='Chatbot' />
          </div>
          <div className={isToggle ? 'info dark' : 'info'}>
            <p>Chatbot</p>
            <p>Đang hoạt động</p>
          </div>
        </div>
      </div>
      <div className='chatbot_container' ref={messageEl}>
        {state.chat.map((msg, i) => (
          <div
            className='chatbot_content'
            key={i}
            style={{
              justifyContent:
                msg.from === 'people'
                  ? 'flex-end'
                  : 'flex-start',
            }}
          >
            {msg.from === 'people' ? (
              <>
                <p className='message message-user'>
                  {msg.message}
                </p>
                <img
                  className='image'
                  src={msg.img}
                  alt={msg.img}
                />
              </>
            ) : (
              <>
                <img
                  className='image'
                  src={msg.img}
                  alt={msg.img}
                />
                <p
                  className={
                    isToggle
                      ? 'message message-bot dark'
                      : 'message message-bot'
                  }
                >
                  {msg.message}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className='chatbot_send'>
        <div
          className={
            isToggle
              ? 'input-wrapper dark'
              : 'input-wrapper'
          }
        >
          <form onSubmit={handleSend}>
            <input
              type='text'
              name='message'
              value={state.message}
              onChange={handleChange}
              placeholder='Bắt đầu trò chuyện ....'
            />
            <div className='send-icon' onClick={handleSend}>
              <FaPaperPlane
                style={{
                  margin: 'auto',
                  fontSize: '120%',
                  color: '#fff',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
