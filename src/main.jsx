import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Theme, ThemePanel } from '@radix-ui/themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%" panelBackground="translucent">
      <App />
      <ThemePanel/>
    </Theme>
  </StrictMode>,
)
