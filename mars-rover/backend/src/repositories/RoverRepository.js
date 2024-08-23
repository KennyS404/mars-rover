const Rover = require('../models/Rover');

class RoverRepository {
  static async save(roverData) {
    const rover = new Rover(roverData);
    return rover.save();
  }

  static async findById(id) {
    return Rover.findById(id);
  }

  static async update(id, updatedRover) {
    return Rover.findByIdAndUpdate(id, updatedRover, { new: true });
  }
}

module.exports = RoverRepository;
