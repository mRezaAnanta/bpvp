const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body
    const user = await prisma.user.create({
      data: { name, email, age: Number(age) },
    })
    res.json({ message: 'User created successfully', user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getAllUsers = async (req, res) => {;
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id: Number(id) }
    })
    if (!user) return res.status(404).json({ message: 'User not found'})
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, age } = req.body
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, age: Number(age) },
    })
    res.json({ message: 'User updated successfully', user})
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await prisma.user.delete({ where: { id: Number(id) } })
    res.json({ message: 'User deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
