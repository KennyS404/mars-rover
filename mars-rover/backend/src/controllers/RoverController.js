const RoverService = require('../services/RoverService');

class RoverController {
  static async deployAndMoveAllRovers(req, res) {
    console.log(req.body, req.body.rovers && req.body.rovers[0] && req.body.rovers[0].position);
  
    try {
      const { plateau, rovers } = req.body;
  
      if (!plateau || !plateau.x || !plateau.y || !rovers || !rovers.length) {
        return res.status(400).json({ error: 'Invalid request payload: Plateau and rovers data are required.' });
      }
  
      RoverService.setPlateau(plateau.x, plateau.y);
  
      const finalPositions = [];
  
      for (const roverData of rovers) {
        const { position, commands } = roverData;
  
        if (!position || !position.x || !position.y || !position.direction || !commands) {
          return res.status(400).json({ error: 'Invalid request payload: Rover data is incomplete.' });
        }
  
        const rover = await RoverService.deployRover(position);
        const updatedRover = await RoverService.moveRover(rover._id, commands);
        finalPositions.push({
          id: rover._id,
          finalPosition: `${updatedRover.x} ${updatedRover.y} ${updatedRover.direction}`
        });
      }
  
      res.status(200).json({ finalPositions });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  
}

module.exports = RoverController;
