const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const RoverController = require('./controllers/RoverController');

app.use(cors());
app.use(express.json());

const mongoURL = process.env.MONGO_URL || 'mongodb://root:rover@marsrover-mongo:27017/marsrover?authSource=admin';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/rovers', RoverController.deployAndMoveAllRovers);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


module.exports = app;
