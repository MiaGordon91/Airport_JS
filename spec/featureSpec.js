describe('Feature Test:', () => {
  'use strict';

  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('plane can take off from airport', () => {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('block takeoff when weather is story', () => {
    plane.land(airport)
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane); 
  }); 
});