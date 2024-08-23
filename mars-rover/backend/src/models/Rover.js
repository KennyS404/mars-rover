const mongoose = require('mongoose');

const RoverSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  direction: String
});

RoverSchema.methods.processCommands = function(commands, plateau) {
    const directions = ['N', 'E', 'S', 'W'];
  
    commands.split('').forEach(command => {
      switch (command) {
        case 'L':
          this.direction = directions[(directions.indexOf(this.direction) + 3) % 4]; 
          break;
        case 'R':
          this.direction = directions[(directions.indexOf(this.direction) + 1) % 4]; 
          break;
        case 'M':
          this.moveForward(plateau);
          break;
      }
    });
  };
  
  RoverSchema.methods.moveForward = function(plateau) {
    switch (this.direction) {
      case 'N':
        if (this.y < plateau.y) this.y += 1;
        break;
      case 'E':
        if (this.x < plateau.x) this.x += 1;
        break;
      case 'S':
        if (this.y > 0) this.y -= 1;
        break;
      case 'W':
        if (this.x > 0) this.x -= 1;
        break;
    }
  };
  
const Rover = mongoose.model('Rover', RoverSchema);
module.exports = Rover;
