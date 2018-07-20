function produceDrivingRange(blockRange) {
	return function(origin, destination ){
      let totalDist = Math.abs(parseInt(origin) - parseInt(destination));
      let range = Math.abs(blockRange - totalDist)
      if (range >= totalDist){
        return `within range by ${range}`
      } else {
        return `${range} blocks out of range`
      }
		}
  }
  
  function produceTipCalculator(tipPercentage){
    return function(bill){
      return bill * tipPercentage
    }
  }

  function createDriver() {
    let driverId = 0;

    return class {
      constructor(name){
        this.name = name
        this.id = ++driverId;
      }
    }
  }