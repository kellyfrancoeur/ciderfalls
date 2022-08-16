const database = {
    guests: [
    {id: 1, name: "Tommi Burness", parkLocId: 1},
    {id: 2, name: "Adam Davis", parkLocId: 2},
    {id: 3, name: "Catherine Meribelli", parkLocId: 6},
    {id: 4, name: "Jocelyn Vernon", parkLocId: 4},
    {id: 5, name: "Abigail Smith", parkLocId: 6},
    {id: 6, name: "Jeremy Mason", parkLocId: 6},
    {id: 7, name: "Nate Morris", parkLocId: 2},
    {id: 8, name: "Nick Langolis", parkLocId: 2}, 
    {id: 9, name: "Beth Rogers", parkLocId: 3},
    {id: 10, name: "Rachel Cain", parkLocId: 5},
    {id: 11, name: "Matt Berryman", parkLocId: 5},
    {id: 12, name: "Cleta Ehhart", parkLocId: 6}
    ],
    services: [
        {id: 1, name: "Rafting", offeredAt: "Chamfort River"},
        {id: 2, name: "Canoeing", offeredAt: "Chamfort River"},
        {id: 3, name: "Fishing", offeredAt: "Chamfort River and Gander River"},
        {id: 4, name: "Hiking", offeredAt: "Lost Wolf Hiking Trail and Gander River"},
        {id: 5, name: "Picknicking", offeredAt: "Lost Wolf Hiking Trail and Lodge"},
        {id: 6, name: "Rock Climbing", offeredAt:"Lost Wolf Hiking Trail"},
        {id: 7, name: "Parking", offeredAt: "Lodge, Campgrounds, and Pine Bluffs Trails"},
        {id: 8, name: "Information", offeredAt: "Lodge, Campgrounds, and Pine Bluffs Trails"},
        {id: 9, name: "Zip Line", offeredAt: "Pine Bluffs Trails"},
        {id: 10, name: "Lodging", offeredAt: "Lodge and Campgrounds"}
    ],
    serviceStuff: [
        {id: 1, parkId: 1, serviceId: 1, name: "Rafting"},
        {id: 2, parkId: 1, serviceId: 2, name: "Canoeing"},
        {id: 3, parkId: 1, serviceId: 3, name: "Fishing"},
        {id: 4, parkId: 2, serviceId: 4, name: "Hiking"},
        {id: 5, parkId: 2, serviceId: 5, name : "Picknicking"},
        {id: 6, parkId: 2, serviceId: 6, name: "Rock Climbing"},
        {id: 7, parkId: 3, serviceId: 5, name: "Picknicking"},
        {id: 8, parkId: 3, serviceId: 7, name: "Parking"},
        {id: 9, parkId: 3, serviceId: 8, name: "Information"},
        {id: 10, parkId: 3, serviceId: 10, name: "Lodging"},
        {id: 11, parkId: 4, serviceId: 3, name: "Fishing"},
        {id: 12, parkId: 4, serviceId: 4, name: "Hiking"},
        {id: 13, parkId: 5, serviceId: 7, name: "Parking"},
        {id: 14, parkId: 5, serviceId: 8, name: "Information"},
        {id: 15, parkId: 5, serviceId: 10, name: "Lodging"},
        {id: 16, parkId: 6, serviceId: 7, name: "Parking"},
        {id: 17, parkId: 6, serviceId: 8, name: "Information"},
        {id: 18, parkId: 6, serviceId: 9, name: "Zip Line"}
    ],
    parkAreas: [
        {id: 1, region: "Northeast Region", name: "Chamfort River"},
        {id: 2, region: "Nothern Region", name: "Lost Wolf Hiking Trail"},
        {id: 3, region: "Northwest Region", name: "Lodge", otherAttractions: {
                                                    hotel: "Hotel",
                                                    restaurant: "Restaurant"}
        },
        {id: 4, region: "Southwest Region", name: "Gander River"},
        {id: 5, region: "Southern Region", name: "Campgrounds", otherAttractions: {
                                                            office: "Office",
                                                            childPlay: "Children's Play Area"}
        },
        {id: 6, region: "Southeast Region", name: "Pine Bluffs Trails", otherAttractions: {
                                                                    beginnerTrail: "Beginner Trail",
                                                                        foodVendors: {
                                                                            vendor1: "Trail Tacos",
                                                                            vendor2: "Pine Bluffs Pizza",
                                                                            vendor3: "On The Go Smoothies"}
            }
        }
    ],

}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkArea => ({...parkArea}))
}

export const getServiceStuff = () => {
    return database.serviceStuff.map(stuff => ({...stuff}))
}