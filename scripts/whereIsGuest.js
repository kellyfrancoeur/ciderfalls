/* import getGuests from database
declare a variable to execute getGuests
export and define a function that will return if the guest parkLocId matches the parkAreas id
will need two parameters for guest and parkArea
return html string "Guest () is in () of Cider Falls Park" 

stretch - create click event for guest list

*/

import { getGuests, getParkAreas } from "./database.js"

const visitingGuest = getGuests()
const whichPark = getParkAreas ()

export const whoIsWhere = (visitor) => {
    const peepsInPark = []
    for (const peeps of visitingGuest) {
        if (peeps.parkLocId === visitor.id) {  
            peepsInPark.push(visitor)
        }
    }

    return peepsInPark
}
// export const filterWalkerCitiesByWalker = (walker) => {
//     const assignments = []
//     for (const assignment of walkerCities) {
//         if (assignment.walkerId === walker.id) {  
//             assignments.push(assignment)
//         }
//     }


//  export const assignedCityNames = (assignments) => {
//     let cityNames = ""
//     for (const assignment of assignments) {
//         for (const city of cities) {
//             if (city.id === assignment.cityId) {
//                 cityNames = `${cityNames} and ${city.name}`
//             }
//         }
//     }
//     return cityNames
// }
export const whereInPark = (peepsInPark) => {
    let parkPlace = ""
    for (const peep of peepsInPark) {
        for (const park of whichPark){
            if (park.id === peep.parkLocId){
                parkPlace = `${park.name}`
            }
        }
    }
    return parkPlace
}




// import { getWalkerCities, getCities } from "./database.js"

// const walkerCities = getWalkerCities ()
// const cities = getCities ()



//     return assignments
// } 
// // const myTempObj = {
// //     id: 5
// // }
// // const walkinSomeDogs = filterWalkerCitiesByWalker(myTempObj)

// import { getPets, getWalkers } from "./database.js"

// // Get copy of state for use in this module
// const pets = getPets()
// const walkers = getWalkers()


// // Function whose responsibility is to find the walker assigned to a pet
// const findWalker = (pet, allWalkers) => {
//     let petWalker = null

//     for (const walker of allWalkers) {
//         if (walker.id === pet.walkerId) {
//             petWalker = walker
//         }
//     }

//     return petWalker
// }

// export const Assignments = () => {
//     let assignmentHTML = ""
//     assignmentHTML = "<ul>"

//     for (const currentPet of pets) {
//         const currentPetWalker = findWalker(currentPet, walkers)
//         assignmentHTML += `
//             <li>
//                 ${currentPet.name} is being walked by
//                 ${currentPetWalker.name} in ${currentPetWalker.city}
//             </li>
//         `
//     }

//     assignmentHTML += "</ul>"

//     return assignmentHTML
// }
