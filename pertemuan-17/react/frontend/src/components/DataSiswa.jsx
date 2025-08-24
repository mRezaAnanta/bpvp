import { useState, useEffect } from 'react'

const DataSiswa = () => {
  const [data, setData] = useState([])
  const [keys, setKeys] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/siswa')
        const data = await response.json()
        const keys = Object.keys(data[0])
        console.log(keys)
        setData(data)
        setKeys(keys)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <p className="bg-red">Daftar Siswa</p>
      <table className="table-auto border border-collapse border-gray-400">
        <thead>
          <tr>
            { keys.map(el => (
            <th>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { data.map(el => (
            <tr>
              <th>{el.id}</th>
              <th>{el.nama}</th>
              <th>{el.umur}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataSiswa
