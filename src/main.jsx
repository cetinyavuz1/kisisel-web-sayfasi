import DataContextProvider from './contexts/context.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
)
