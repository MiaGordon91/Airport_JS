// forces user to declare variables with let, const or var
'use strict'; 

describe('Plane', () => {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']);
  });
  it('can land plane at airport', () => {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});