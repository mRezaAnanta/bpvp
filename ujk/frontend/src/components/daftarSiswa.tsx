import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR, {useSWRConfig} from 'swr'

const fetcher = async() => {
  const response = await axios.get('http://localhost:3000/siswa', {
    headers: { Accept: 'application/json'}
  })
  return response.data
}

const deleteSiswa = async(id) => {
  if (window.confirm("Apakah Anda yakin mengapus data ini?")) {
    await axios.delete(`http://localhost:3000/siswa/${id}`)
    mutate('http://localhost:3000/siswa')
  }
}

const daftarSiswa = () => {
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR('http://localhost:3000/siswa', fetcher)
  if (error) return <h1>Gagal memuat data</h1>
  if (!data) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Daftar Siswa</h1>
      <div>
        <Link to="/tambah">Tambah Data Siswa</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((siswa, index) => (
              <tr key={siswa.id}>
                <td>{index + 1}</td>
                <td>{siswa.nama}</td>
                <td>{siswa.umur}</td>
                <td>
                  <Link to={`/edit/${siswa.id}`}>
                    Edit
                  </Link>
                  <button onClick={() => deleteSiswa(siswa.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default daftarSiswa
