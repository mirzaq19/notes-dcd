import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import '@/styles/globals.css'
import ThemeProvider from '@/components/provider/ThemeProvider.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'
import LocaleProvider from './components/provider/LocaleProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <LocaleProvider>
            <App />
          </LocaleProvider>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
)
