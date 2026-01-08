import React from 'react'
import { createRoot } from 'react-dom/client'

const MyApp = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Visit Google'
)

createRoot(document.getElementById('root')).render(
  MyApp
)
