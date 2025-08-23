import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getAllSiswa = async (req, res) => {
  try {
    const siswa = await prisma.datasiswa.findMany()
    res.json(siswa)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getSiswaById = async (req, res) => {
  try {
    const { id } = req.params
    const siswa = await prisma.datasiswa.findUnique({
      where: { id: Number(id) }
    })
    if (!siswa) return res.status(404).json({ message: 'User not found'})
    res.json(siswa)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const createSiswa = async (req, res) => {
  try {
    const { nama, umur } = req.body
    const siswa = await prisma.datasiswa.create({
      data: { nama, umur: Number(umur) },
    })
    res.json({ message: 'Siswa created successfully', siswa })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const updateSiswa = async (req, res) => {
  try {
    const { id } = req.params
    const { nama, umur } = req.body
    const siswa = await prisma.datasiswa.update({
      where: { id: Number(id) },
      data: { nama, umur: Number(umur) },
    })
    res.json({ message: 'Siswa updated successfully', siswa})
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const deleteSiswa = async (req, res) => {
  try {
    const { id } = req.params
    await prisma.datasiswa.delete({ where: { id: Number(id) } })
    res.json({ message: 'Siswa deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
