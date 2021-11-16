// forces user to declare variables with let, const or var
'use strict'; 

describe('Plane', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    // created a spy(double) that stubs the interaction between the plane
    // and airport object - isolates the test. 
    airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
  });

  it('can land plane at airport', () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff plane at airport', () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});