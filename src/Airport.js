'use strict';

class Airport{

  constructor(){
    this._hangar = []
  }
    planes(){
    return this._hangar;
    }

    clearForLanding(plane) {
      this._hangar.push(plane);
    }

    clearForTakeOff(plane) {
      if(this.isStormy()) {
        throw new Error('cannot takeoff during storm');
      }
      this._hangar = [];
      // this._hangar.pop(plane);
    }

    isStormy() {
      return false;
    }
};

