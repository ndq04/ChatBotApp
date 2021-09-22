import {Link} from 'react-router-dom'
import Toggle from './Toggle'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {GiBatwingEmblem} from 'react-icons/gi'

const Header = () => {
  const {isToggle} = useContext(ThemeContext)
  return (
    <div className={isToggle ? 'header dark' : 'header'}>
      <div className='wrapper'>
        <div className='left'>
          <h3 className={isToggle ? 'dark' : ''}>
            <span>
              <GiBatwingEmblem
                fontSize='200%'
                style={{
                  marginRight: '10px',
                }}
              />
            </span>
            <span>Duy Quang</span>
          </h3>
        </div>
        <div className='right'>
          <ul className='links'>
            <li>
              <Link
                to='/'
                translate='Dịch'
                className='translate dark'
              >
                <i className='far fa-language'></i>
              </Link>
            </li>
            <li>
              <Link
                to='/chat'
                chat='Trò chuyện'
                className='chat'
              >
                <i className='fal fa-comments-alt'></i>
              </Link>
            </li>
            <Toggle isToggle={isToggle} />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
