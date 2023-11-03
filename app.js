const express =require('express')
const app = express()
const mongoose= require('mongoose')
const bodyParser = require("body-parser");
const userroutes= require('./routes/UserRoutes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://acharayanarayan01:cbWYI2jVGeqNfDsP@cluster0.48ymwaj.mongodb.net/task?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1);
})
app.use('/user',userroutes)
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
