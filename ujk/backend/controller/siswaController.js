import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient

export const getSiswa = async(req, res) => {
  try {
    const response = await prisma.datasiswa.findMany()
    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({message: err.message})
    console.log(err.message)
  }
}

export const getSiswaById = async(req, res) => {
  try {
    const response = await prisma.datasiswa.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({message: err.message})
    console.log(err.message)
  }
}

export const createSiswa = async(req, res) => {
  console.log('Request body:', req.body) // Debug
  console.log('Request headers:', req.headers) // Debug
  
  const { nama, umur } = req.body
  
  if (!nama || !umur) {
    return res.status(400).json({
      message: 'Nama dan umur harus diisi',
      receivedBody: req.body
    })
  }
  
  try {
    const response = await prisma.datasiswa.create({
      data: {
        nama,
        umur: Number(umur)
      }
    })
    res.status(201).json(response)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

export const updateSiswa = async(req, res) => {
  const { nama, umur } = req.body
  try {
    const response = await prisma.datasiswa.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        nama,
        umur: Number(umur)
      }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}

export const deleteSiswa = async(req, res) => {
  try {
    const response = await prisma.datasiswa.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({message: err.message})
  }
}
