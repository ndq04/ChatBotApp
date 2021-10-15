import {Link} from 'react-router-dom'
import Toggle from './Toggle'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {GiBatwingEmblem} from 'react-icons/gi'
import {SiGoogletranslate, SiWechat} from 'react-icons/si'

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
                className='translate'
              >
                <SiGoogletranslate className='icon' />
              </Link>
            </li>
            <li>
              <Link
                to='/chat'
                chat='Trò chuyện'
                className='chat'
              >
                <SiWechat className='icon chat' />
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
