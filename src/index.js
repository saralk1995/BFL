const path = require('path')
const express = require('express')
const userRouter = require('./routers/user')
const dashboardRouter = require('./routers/dashboard')
require('./db/mongoose')
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(userRouter)
app.use(dashboardRouter)
app.listen(port,() =>
{
    console.log("Server is up and running on port " + port)
})