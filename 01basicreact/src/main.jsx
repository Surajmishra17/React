import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "Don"

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
  },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    ReactElement
)
