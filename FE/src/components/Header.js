import {Link} from 'react-router-dom'
import Toggle from './Toggle'
import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {GiBatwingEmblem} from 'react-icons/gi'
import {SiGoogletranslate, SiWechat} from 'react-icons/si'
import {useLocation} from 'react-router-dom'

const Header = () => {
  const {pathname} = useLocation()
  const {isToggle} = useContext(ThemeContext)
  return (
    <div className={isToggle ? 'header dark' : 'header'}>
      <div className='header-nav'>
        <h3 className={isToggle ? 'dark' : ''}>
          <span>
            <GiBatwingEmblem
              className='logo'
              fontSize='200%'
              style={{
                marginRight: '10px',
                color: '#f1f1f1',
              }}
            />
          </span>
          <span>Duy Quang</span>
        </h3>
        <Toggle isToggle={isToggle} />
      </div>
      <ul className='header-menu'>
        <li>
          <Link
            to='/'
            className={
              isToggle && pathname === '/'
                ? 'active dark'
                : pathname === '/'
                ? 'active'
                : ''
            }
          >
            <SiGoogletranslate className='icon' />
            <span>Dịch</span>
          </Link>
        </li>
        <li>
          <Link
            to='/chat'
            className={
              isToggle && pathname === '/chat'
                ? 'active dark'
                : pathname === '/chat'
                ? 'active'
                : ''
            }
          >
            <SiWechat className='icon chat' />
            <span>Trò chuyện</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
