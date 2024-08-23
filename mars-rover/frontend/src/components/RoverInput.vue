<template>
  <div class="p-6 space-y-6">
    <h2 class="text-xl font-bold">Set Plateau</h2>
    <div class="grid grid-cols-2 gap-4">
      <input v-model="plateauX" placeholder="Plateau X Coordinate" class="w-full p-2 border rounded" />
      <input v-model="plateauY" placeholder="Plateau Y Coordinate" class="w-full p-2 border rounded" />
    </div>

    <h2 class="text-xl font-bold mt-6">Deploy Rovers</h2>
    <div v-for="(rover, index) in rovers" :key="index" class="p-4 border rounded-md space-y-4 bg-gray-100">
      <h3 class="text-lg font-semibold">Rover {{ index + 1 }}</h3>
      <div class="grid grid-cols-2 gap-4">
        <input v-model="rover.x" placeholder="Rover X Coordinate" class="w-full p-2 border rounded" />
        <input v-model="rover.y" placeholder="Rover Y Coordinate" class="w-full p-2 border rounded" />
        <input v-model="rover.direction" placeholder="Rover Direction (N, E, S, W)" class="w-full p-2 border rounded" />
        <input v-model="rover.commands" placeholder="Commands (L, R, M)" class="w-full p-2 border rounded" />
      </div>
      <button @click="removeRover(index)" class="bg-red-500 text-white p-2 rounded">Remove Rover</button>
    </div>

    <div class="flex space-x-4">
      <button @click="addRover" class="bg-green-500 text-white p-2 rounded">Add Rover</button>
      <button @click="deployAllRovers" class="bg-blue-500 text-white p-2 rounded">Deploy All Rovers</button>
    </div>
  </div>
</template>

<script>
import RoverService from '@/services/RoverService';

export default {
  data() {
    return {
      plateauX: '',
      plateauY: '',
      rovers: [{ x: '', y: '', direction: '', commands: '' }],
    };
  },
  methods: {
    addRover() {
      this.rovers.push({ x: '', y: '', direction: '', commands: '' });
    },
    removeRover(index) {
      this.rovers.splice(index, 1);
    },
    async deployAllRovers() {
      const data = {
        plateau: {
          x: parseInt(this.plateauX),
          y: parseInt(this.plateauY),
        },
        rovers: this.rovers.map((rover) => ({
          position: {
            x: parseInt(rover.x),
            y: parseInt(rover.y),
            direction: rover.direction,
          },
          commands: rover.commands,
        })),
      };

      try {
        const response = await RoverService.deployRover(data);
        console.log('Rovers deployed successfully:', response.data);
      } catch (error) {
        console.error('Error deploying rovers:', error);
      }
    },
  },
};
</script>

<style scoped>

</style>
