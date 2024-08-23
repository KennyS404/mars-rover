import { shallowMount } from '@vue/test-utils';
import RoverInput from '@/components/RoverInput.vue';
import RoverService from '@/services/RoverService';

jest.mock('@/services/RoverService');

describe('RoverInput.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(RoverInput);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render plateau inputs correctly', () => {
    expect(wrapper.find('input[placeholder="Plateau X Coordinate"]').exists()).toBe(true);
    expect(wrapper.find('input[placeholder="Plateau Y Coordinate"]').exists()).toBe(true);
  });

  it('should add a new rover when addRover is called', async () => {
    wrapper.vm.addRover();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.rovers.length).toBe(2); 
  });

  it('should remove a rover when removeRover is called', async () => {
    wrapper.vm.addRover();
    await wrapper.vm.$nextTick();
    wrapper.vm.removeRover(1);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.rovers.length).toBe(1); 
  });

  it('should call RoverService.deployRover with the correct data', async () => {
    wrapper.setData({
      plateauX: '5',
      plateauY: '5',
      rovers: [{ x: '1', y: '2', direction: 'N', commands: 'LMLMLMLMM' }]
    });

    await wrapper.vm.deployAllRovers();

    expect(RoverService.deployRover).toHaveBeenCalledWith({
      plateau: { x: 5, y: 5 },
      rovers: [
        {
          position: { x: 1, y: 2, direction: 'N' },
          commands: 'LMLMLMLMM'
        }
      ]
    });
  });

  it('should catch and log errors when deployAllRovers fails', async () => {

    RoverService.deployRover.mockRejectedValue(new Error('Network Error'));
  
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    await wrapper.vm.deployAllRovers();
  
    expect(consoleSpy).toHaveBeenCalledWith('Error deploying rovers:', expect.any(Error));
  
    consoleSpy.mockRestore();
  });
  
});
