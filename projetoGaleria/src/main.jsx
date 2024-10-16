import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Header.jsx'
import './index.css'
import './ImageGallery.jsx'
import ImageGallery from './ImageGallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ImageGallery />
  </StrictMode>,
)
