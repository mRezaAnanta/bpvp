require('dotenv').config()

const mysql = require('mysql2')
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

exports.getAllStudents = async (req, res) => {
  pool.query('SELECT * FROM students', (err, results, fields) => {
    if (err) {
      throw err
    } else if (!results || results.length < 1) {
      res.status(500).json({ message: 'wrong data' })
    } else {
    res.status(200).json(results)
    }
  })
}

exports.getStudentsById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(`SELECT * FROM students WHERE id = ${id}`, (err, results, fields) => {
    if (err) {
      throw err
    } else if (!results || results.length < 1) {
      res.status(404).json({ message: `Students with id ${id} doesn't exist in database` })
    } else {
    res.status(200).json(results)
    }
  })
}

exports.createStudentData = (req, res) => {
  const { name, dateOfBirth } = req.body
  if (!name && !dateOfBirth) {
    return res.status(400).json({ message: 'Input tidak valid' })
  }

  const newStudent = {
    name,
    dateOfBirth
  }

  pool.query(`INSERT INTO students SET ?`, newStudent, (err, results, fields) => {
    if (err) {
      throw err
    } else if (!results || results.length < 1) {
      res.status(500).json({ message: `Students with id ${id} doesn't exist in database` })
    } else {
  res.status(201).json(newStudent)
    }
    })
}

exports.updateStudentData = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, dateOfBirth } = req.body
  if (!name || !dateOfBirth) {
    return res.status(400).json({ message: 'Input tidak valid' })
  }

  pool.query(`UPDATE students SET name = "${name}", dateOfBirth = "${dateOfBirth}" WHERE id = ${id}`, (err, results, fields) => {
    if (err) {
      throw err
    } else if (!results || results.length < 1) {
      res.status(404).json({ message: `Students with id ${id} doesn't exist in database` })
    } else {
    res.status(200).json(results)
    }
  })
}

exports.deleteStudentData = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(`DELETE FROM students WHERE id = ${id}`, (err, results, fields) => {
    if (err) {
      throw err
    } else if (!results || results.length < 1) {
      res.status(404).json({ message: `Students with id ${id} doesn't exist in database` })
    } else {
    res.status(204).send()
    }
  })
}
