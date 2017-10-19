function produceDrivingRange(possibleRange) {
  return function(begin, end) {
    const num = Math.abs(parseInt(end) - parseInt(begin))
    const diff = possibleRange - num
    if (diff < 0) {
      return `${Math.abs(diff)} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(price) {
    return price * percent
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
