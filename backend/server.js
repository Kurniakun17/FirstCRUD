const express = require('express')
const db = require('./models')
const cors = require('cors')
const router = require('./routes/users.routes')
const app = express()

app.use(cors())
app.use(express.json())

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
  .then(() => console.log("Database connected"))
  .catch(err => {
    console.log(err.message)
    process.exit()
  })

app.use('/', router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))