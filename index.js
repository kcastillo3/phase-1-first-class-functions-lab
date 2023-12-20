// Code your solution in this file!

// test 1
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
   };
   
   console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

// test 2
function returnLastTwoDrivers(driver_s) {
    return [driver_s[2], driver_s[3]];
   }

//  test 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// test 4
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
   }

// test 5
function createFareMultiplier(multiplier) {
 return function(fare) {
 return fare * multiplier;
 };
}
      const fareDoubler = createFareMultiplier(2)
      const fareTripler = createFareMultiplier(3)

// test 6
function selectDifferentDrivers(drivers, selector) {
    return selector(drivers);
}
