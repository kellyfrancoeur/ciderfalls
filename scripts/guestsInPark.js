import { getGuests } from "./database.js"
import { whoIsWhere, whereInPark } from "./whereIsGuest.js"
import { getParkAreas } from "./database.js"

const parks = getParkAreas ()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("visitor")) {
            const [,visitorId] = itemClicked.id.split("--")
            for (const park of parks){
                for (const visitor of visitors) {
                    if (park.id === visitor.parkLocId) {
                    if (visitor.id === parseInt(visitorId)) {
                    // const peepsInPark = whoIsWhere(visitor)
                    // const park = whereInPark(peepsInPark)
   
                    window.alert(`${visitor.name} is in ${park.name}, the ${park.region} of Cider Falls Park.`)
                }
            }
            // return [,visitorId]
        }
    }
}
    }
)

// const findVisitor = (guest, specificPark) => {
//     let guestIsWhere = null
//     for (const person of specificPark){
//         if (person.id === )
//     }
// }

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


const visitors = getGuests ()

export const guestsInPark = () => {
    let guestHTML = ""

    for (const visitor of visitors) {
        guestHTML += `<div class = "visitor" id ="visitor-- ${visitor.id}">${visitor.name}</div>`
    }

    // guestHTML += "</ul>"

    return guestHTML
}
