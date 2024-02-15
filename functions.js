// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (allTrails) => {
    let shortestTrail = 9000
    for (const trail of allTrails) {
        if(trail.length < shortestTrail) {
            shortestTrail = trail.length
        }
    }

    return shortestTrail
}

// Get the longest of all trails
const longestTrail = (allTrails) => {
    let longestTrail = 0
    for (const trail of allTrails) {
        if(trail.length > longestTrail) {
            longestTrail = trail.length
        }
    }

    return longestTrail
}
// Get the total river miles
const totalRiverMiles = (allRivers) => {
    let total = 0
    for (const river of allRivers) {
        total += river.length
    }

    return total
}
// Get the shortest of all rivers
const shortestRiver = (allRivers) => {
    let shortestRiver = 9000
    for (const river of allRivers) {
        if(river.length < shortestRiver) {
            shortestRiver = river.length
        }
    }

    return shortestRiver
}
// Get the longest of all rivers
const longestRiver = (allRivers) => {
    let longestRiver = 0
    for (const river of allRivers) {
        if(river.length > longestRiver) {
            longestRiver = river.length
        }
    }

    return longestRiver
}
// Log out a list of the cheapest trails of price $
const cheapTrails = (trail) => {
            let cheapTrail = `${trail.trailName} at Price: ${trail.price}`;
            return cheapTrail;
        }
        

// Log out a list of the most expensive trails of price $$$$-$$$$$
const expensiveTrails = (trail) => {
            let expensiveTrail = `${trail.trailName} at Price: ${trail.price}`;
            return expensiveTrail;
        }
        

// Log out a list of the cheapest rivers of price $
const cheapRivers = (allRivers) => {
    for (const river of allRivers) {
        if (river.price === "$") {
            let cheapRiver = `${river.river} at Price: ${river.price}`;
            return cheapRiver;
        }
        
    }
}
// Log out a list of the most expensive rivers of price $$$$-$$$$$
const expensiveRivers = (allRivers) => {
    for (const river of allRivers) {
        if (river.price === "$$$$" || river.price === "$$$$$") {
            let expensiveRiver = `${river.river} at Price: ${river.price}`;
            return expensiveRiver;
        }
        
    }
}
// Log out formatted info about each trail
const trailInfo = (trails) => {
    for (const trail of trails) {
        let trailMessage = `${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long. The highlighted plant for the trip is ${trail.plantHighlight}.`;
        console.log(trailMessage);  
        console.log("") 
    }
}
// Log out formatted info about each river tour
const riverInfo = (rivers) => {
    for (const riverTrail of rivers) {
        let riverMessage = `${riverTrail.river} starts at [${riverTrail.latitude}, ${riverTrail.longitude}] and is ${riverTrail.length} kilometers long. The unique fish for the trip is ${riverTrail.uniqueFish}.`;
        console.log(riverMessage);  
        console.log("") 
    }
}

// Export functions 
module.exports = {
    totalTrailMiles, shortestTrail, longestTrail,
    totalRiverMiles, shortestRiver,
    longestRiver, cheapTrails, expensiveTrails, 
    cheapRivers, expensiveRivers, trailInfo, 
    riverInfo
}