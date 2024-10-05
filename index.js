const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (driversArray) => {
    const newDrivers = driversArray.slice(0,2)
    return newDrivers
}

 const returnLastTwoDrivers = (driversArray) => {
    const newDrivers = driversArray.slice(-2)
    return newDrivers
 }

 const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
 
function createFareMultiplier (integer){
    return function fareMultiplier(integer){return integer * 5}
}

function fareDoubler (integer){return integer * 2}

function fareTripler (integer){return integer * 3}

function selectDifferentDrivers (driversArray, fn){
    if (fn === returnFirstTwoDrivers){return returnFirstTwoDrivers(driversArray)}
    else if(fn === returnLastTwoDrivers){return returnLastTwoDrivers(driversArray)}
}

