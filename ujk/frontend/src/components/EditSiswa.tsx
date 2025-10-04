import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditSiswa = () => {
  const [nama, setNama] = useState('')
  const [umur, setUmur] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const updateSiswa = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3000/siswa/${id}`, {
      nama: nama,
      umur: Number(umur)
    })
    navigate('/')
  }

  useEffect(() => {
    const getSiswaById = async() => {
      const res = await axios.get(`http://localhost:3000/siswa/${id}`)
      setNama(res.data.nama)
      setUmur(res.data.umur)
    }

    getSiswaById()
  }, [id])

  return (
    <div>
      <form onSubmit={updateSiswa}>
        <div>
          <label>Nama</label>
          <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label>Umur</label>
          <input type="text" value={umur} onChange={(e) => setUmur(e.target.value)} />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditSiswa
