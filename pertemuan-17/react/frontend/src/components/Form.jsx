import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Form() {
  const [data, setData] = useState({
    nama: '',
    umur: 0
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const req = await axios.post('http://localhost:8000/api/siswa', {
        nama: data.nama,
        umur: data.umur
      }).then(res => {
          console.log(res.data)
          alert("Siswa is created successfully!")
        })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Siswa</h1>
      <form method="post" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nama" className="block text-lg mb-2">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            onChange={handleChange}
            placeholder="Masukkan nama"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="umur" className="block text-lg mb-2">
            Umur
          </label>
          <input
            type="text"
            id="umur"
            name="umur"
            onChange={handleChange}
            placeholder="Masukkan umur"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Siswa
        </button>
      </form>
    </div>
  )
}
