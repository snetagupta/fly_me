// Function to calculate the minimum planes needed to reach the last airport
function minimumPlanesNeeded(array) {
    
  // Initialize the count of planes needed
  let planesNeeded = 0;

  // Start with the fuel available at the first airport
  let currentFuel = array[0];

  // Initialize the maximum reach variable
  let maxReach = 0;

  // Iterate through each airport starting from the second one
  for (let i = 1; i < array.length; i++) {
    // Update the maximum reach of the current airport
    maxReach = Math.max(maxReach, i + array[i]);

    // Check if we need to refuel
    if (i > currentFuel) {
      // If the maximum reachable airport is less than or equal to the current airport,
      if (maxReach <= i) {
        // it's not possible to reach the last airport, so return -1
        return -1;
      }

      // Update currentFuel to the maximum reach and increment planesNeeded
      currentFuel = maxReach;
      planesNeeded++;
    }
  }

  // Return the minimum planes needed to reach the last airport
  return planesNeeded;
}

// Example:
const fuelArray = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanesNeeded(fuelArray));
