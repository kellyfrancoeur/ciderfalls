import { getParkAreas, getGuests  } from "./database.js";

const partOfPark = getParkAreas ()
const peoples = getGuests()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("park")) {
            const [,parkId] = itemClicked.id.split("--")
            let sum = 0
            let parkName 
            for (const park of partOfPark) {
                if(parseInt(parkId) === park.id){
                    parkName = park.name
                    for (const people of peoples) {
                        if (people.parkLocId === parseInt(parkId)) {
                            sum ++
                        }
                        // parkName = park.name    
                    }
                }
        }
        window.alert(`${parkName} currently has ${sum} guests.`)
        // return [,parkId]
    }
}
)

// for (let i = 0; i < peoples.length; i++)
// sum += peoples[i]

export const parkAreas = () => {
    let parkHtml = ""
    for (const park of partOfPark){
        parkHtml += `<div class = "park" id = "park--${park.id}">${park.name}</div>`
    }
    // parkHtml += "</ul>"
    return parkHtml
}






// import { getCities } from "./database.js"


// const cities = getCities ()

// export const CityList = () => {
//     let citiesHTML = "<ul>"

//     for (const city of cities) {
//         citiesHTML += `<li> ${city.name}</li>`
//     }

//     citiesHTML += "</ul>"

//     return citiesHTML
// }

