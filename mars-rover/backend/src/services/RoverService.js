const RoverRepository = require('../repositories/RoverRepository');

class RoverService {
    static plateau = { x: 5, y: 5 };

    static setPlateau(x, y) {
      RoverService.plateau = { x, y };
    }
  
    static async deployRover(data) {
      if (data.plateau) {
        RoverService.plateau = { x: data.plateau.x, y: data.plateau.y }; 
      }
      
      if (data.x < 0 || data.x > RoverService.plateau.x || data.y < 0 || data.y > RoverService.plateau.y) {
        throw new Error('Rover is out of plateau bounds');
      }
  
      return RoverRepository.save(data);
    }
  
    static async moveRover(id, commands) {
      const rover = await RoverRepository.findById(id);
      rover.processCommands(commands, RoverService.plateau);  
      return RoverRepository.update(id, rover);
    }
  }
  

module.exports = RoverService;
