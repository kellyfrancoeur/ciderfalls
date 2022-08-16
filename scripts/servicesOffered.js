import { getServices} from "./database.js"

const services = getServices()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")
            for (const service of services) {
                if (service.id === parseInt(serviceId)){
                let servicesOffered = service.offeredAt
                let serviceName = service.name
                window.alert(`${serviceName} is available at ${servicesOffered}.`)
        }
    }
    return [,serviceId]
}
}
)

export const servicesOffered = () => {
    let serviceHTML = ""

    for (const service of services) {
        serviceHTML += `<div class ="service" id ="service-- ${service.id}"><cite>${service.name}</cite></div>`
    }

    // serviceHTML += "</ul>"

    return serviceHTML
}
//need to create a click event 
