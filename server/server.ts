import express from 'express'
import { Sequelize } from 'sequelize'

import clientRouter from './src/client/api-client-routers'
import employeeRouter from './src/employee/api-employee-routers'
import projectRouter from './src/project/api-project-routers'
import taskRouter from './src/task/api-task-routers'
import teamRouter from './src/team/api-team-routers'

const app = express()
const PORT = 3000

app.use(express.json())

app.use(clientRouter)
app.use(projectRouter)
app.use(employeeRouter)
app.use(taskRouter)
app.use(teamRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('pypypy:(')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

//TODO: Сменить на env

const sequelize = new Sequelize('IT_company_projects', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
})

export default sequelize
