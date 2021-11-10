import {createContext, useState} from 'react'

const light = {
  background: '#f1f1f1',
}
const dark = {
  background: '#242526',
}

export const ThemeContext = createContext()

const ThemeContextPorvider = ({children}) => {
  const [isToggle, setIsToggle] = useState(false)
  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }
  return (
    <ThemeContext.Provider
      value={{light, dark, isToggle, handleToggle}}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextPorvider
