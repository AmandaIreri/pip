// Define the Location class with a simplified distance calculation
class Location {
    constructor(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
    }
  
    static distanceBetween(location1, location2) {
      const dLat = location2.latitude - location1.latitude;
      const dLon = location2.longitude - location1.longitude;
      const a = Math.pow(dLat, 2) + Math.pow(dLon, 2);
      const c = Math.sqrt(a);
      return c; // Approximate distance in kilometers
    }
  }
  
  // Define the Passenger class
  class Passenger {
    constructor(name, location) {
      this.name = name;
      this.location = location;
    }
  }
  
  // Define the Driver class
  class Driver {
    constructor(name, location, carCapacity) {
      this.name = name;
      this.location = location;
      this.carCapacity = carCapacity;
      this.passengers = [];
    }
  
    addPassenger(passenger) {
      if (this.passengers.length < this.carCapacity) {
        this.passengers.push(passenger);
      } else {
        console.log("Car is full.");
      }
    }
  }
  
  // Define the DispatchSystem class
  class DispatchSystem {
    constructor() {
      this.drivers = [];
      this.passengers = [];
    }
  
    addDriver(driver) {
      this.drivers.push(driver);
    }
  
    addPassenger(passenger) {
      this.passengers.push(passenger);
    }
  
    matchRidersToDrivers() {
      this.drivers.forEach(driver => {
        this.passengers.forEach(passenger => {
          const distance = Location.distanceBetween(driver.location, passenger.location);
          if (distance <= 1) { // Assuming a maximum of 1km distance for matching
            driver.addPassenger(passenger);
          }
        });
      });
  
      this.passengers = []; // Clear passengers after matching
    }
  }
  
  // Create objects from the classes
  const locationA = new Location(40.7128, -74.0060); // New York City coordinates
  const locationB = new Location(34.0522, -118.2437); // Los Angeles coordinates
  
  const passenger1 = new Passenger('Alice', locationA);
  const passenger2 = new Passenger('Bob', locationB);
  
  const driver1 = new Driver('Charlie', locationA, 2); // Charlie's car can carry 2 passengers
  const driver2 = new Driver('Diana', locationB, 3); // Diana's car can carry 3 passengers
  
  // Create a dispatch system and add drivers and passengers to it
  const dispatchSystem = new DispatchSystem();
  dispatchSystem.addDriver(driver1);
  dispatchSystem.addDriver(driver2);
  dispatchSystem.addPassenger(passenger1);
  dispatchSystem.addPassenger(passenger2);
  
  // Match riders to drivers
  dispatchSystem.matchRidersToDrivers();
  
  // Log the results
  console.log(`Driver 1 passengers: ${driver1.passengers.map(p => p.name).join(', ')}`);
  console.log(`Driver 2 passengers: ${driver2.passengers.map(p => p.name).join(', ')}`);
    