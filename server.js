var express = require('express')
let mongoose = require('mongoose')
var app = express()

var PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json()) //middleware parsing

var apiRoutes = require('./routes/api')
var htmlRoutes = require('./routes/html')

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function () {
  console.log('App is listening on http://localhost:' + PORT)
})
