import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TambahSiswa = () => {
  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState('')
  const navigate = useNavigate()

  const simpanSiswa = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/siswa', {
      nama: nama,
      umur: Number(umur)
    })
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={simpanSiswa}>
        <div>
          <label>Nama</label>
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label>Umur</label>
          <input type="text" value={umur} onChange={(e) => setUmur(e.target.value)} />
        </div>
        <div>
          <button type="submit">Simpan</button>
        </div>
      </form>
    </div>
  )
}

export default TambahSiswa
