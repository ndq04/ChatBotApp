import {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
function Toggle() {
  const {isToggle, handleToggle} = useContext(ThemeContext)
  return (
    <div
      className={isToggle ? 'toggle night' : 'toggle'}
      onClick={handleToggle}
    >
      <div className='notch'>
        <div className='crater'></div>
        <div className='crater'></div>
      </div>
      <div>
        <div className='shape sm'></div>
        <div className='shape sm'></div>
        <div className='shape md'></div>
        <div className='shape lg'></div>
      </div>
    </div>
  )
}

export default Toggle
