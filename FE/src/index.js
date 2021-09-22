import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ThemeContextPorvider from './context/ThemeContext'
import './styles/index.css'
import './styles/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextPorvider>
      <App />
    </ThemeContextPorvider>
  </React.StrictMode>,
  document.getElementById('root')
)
