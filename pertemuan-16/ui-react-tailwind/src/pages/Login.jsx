import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config/Constants.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
// import axios from "axios";
import axios from '../config/configureAxios.js'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'

function Login({ onSwitchToRegister, onClose }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('')
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Memproses...')
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, form)
      const { accessToken } = res.data
      const dataLogin = { accessToken, email: form.email }

      localStorage.setItem("user", JSON.stringify(dataLogin))
      setUser(dataLogin)
      setStatus('Login berhasil')

      if (onClose) onClose()
      navigate('/')
    } catch (err) {
      setStatus('Email atau password salah')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Form Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <Input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <Button type="submit" variant="primary">Kirim</Button>
        { status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p> }
        <div className="text-center mt-4">
          <p className="text-sm">
            Belum punya akun?
            <button type="button" onClick={onSwitchToRegister} className="text-blue-600 hover:underline ml-1">
              Registrasi disini
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
