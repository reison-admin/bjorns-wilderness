
const { trails, rivers } = require("./data.js")
const {
    totalTrailMiles, shortestTrail, longestTrail,
    totalRiverMiles, shortestRiver,
    longestRiver, cheapTrails, expensiveTrails, 
    cheapRivers, expensiveRivers, trailInfo, 
    riverInfo
    } = require("./functions.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = Math.floor(totalTrailMiles(trails) * 10) / 10
console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longestTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

console.log("----------")
console.log("The least expensive trails are:");
console.log("");

for (const trail of trails) {
    if (trail.price === "$") {
        console.log(cheapTrails(trail));
    }
}

console.log("----------")
console.log("The most expensive trails are:");
console.log("");

for (const trail of trails) {
    if (trail.price === "$$$$" || trail.price === "$$$$$") {
        console.log(expensiveTrails(trail));
    }
}

console.log("");
console.log("TRAIL DETAILS:");
console.log("----------------------------------");

for (const trail of trails) {
    console.log(trailInfo(trail));
    console.log("")
}
console.log("***************************************************")
console.log("*****              R I V E R S                *****")
console.log("***************************************************")

const riverTotalLength = totalRiverMiles(rivers)
console.log(`We offer expert guidance on ${riverTotalLength} kilometers of scenic rivers across the US`)

const shortRiver = shortestRiver(rivers)
console.log(`The shortest river is ${shortRiver} kilometers`)

const longRiver = longestRiver(rivers)
console.log(`The longest river is ${longRiver} kilometers`)

console.log("");

console.log("----------")
console.log("The least expensive river tours are:");
console.log("");

for (const river of rivers) {
    if (river.price === "$") {
        console.log(cheapRivers(river));
    }
}

console.log("----------")
console.log("The most expensive river tours are:");
console.log("");

for (const river of rivers) {
    if (river.price === "$$$$" || river.price === "$$$$$") {
        console.log(expensiveRivers(river));
    }
}

console.log("RIVER DETAILS:");
console.log("----------------------------------");

for (const river of rivers) {
    console.log(riverInfo(river));
    console.log("") 
}



