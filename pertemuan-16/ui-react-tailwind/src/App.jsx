import './App.css'
import { AuthProvider } from './context/AuthContext'
import MainRoutes from './routes/Index.jsx'

function App() {
  return (
    <>
      <AuthProvider>
        <MainRoutes/>
      </AuthProvider>
    </>
  )
}

export default App
