import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='left'>
          <h3>Design | Duy Quang</h3>
        </div>
        <div className='right'>
          <ul className='links'>
            <li>
              <Link to='/' translate='Dịch'>
                <i className='far fa-language'></i>
              </Link>
            </li>
            <li>
              <Link to='/chat' chat='Trò chuyện'>
                <i className='fal fa-comments-alt'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
