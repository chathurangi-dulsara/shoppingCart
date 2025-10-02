import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Context/ThemeContext';
import { Provider } from 'react-redux'
import store from './Utils/index.js'

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider>
    <App />

    </ThemeProvider>
    </BrowserRouter>
    </Provider>
 
)
