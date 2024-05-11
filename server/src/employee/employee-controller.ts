import { QueryTypes } from 'sequelize'
import sequelize from '../../server'

export const getEmployees = async (req, res) => {
  try {
    const employees = await sequelize.query('SELECT * FROM employee', {
      type: QueryTypes.SELECT,
    })
    res.json(employees)
  } catch (error) {
    console.error('Error fetching employees:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
