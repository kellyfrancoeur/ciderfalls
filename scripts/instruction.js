/*
What are main resources?
    Guests, Services, ServiceStuff, ParkAreas
What are properties for each?
    Guests: id, name, parkLocId
    Services: id, name -
                    (rafting, canoeing, fishing, hiking
                        picknicking, rock climbing, 
                        hotel - which has restaurant & lodging,
                        parking, information, office park, 
                        children play area, zip lines,
                        food vendors @ beginner trail)
    ParkAreas: id, name - 
                    (Chamfort River - Northeast
                     Lost Wolf Hiking Trail - Northern
                     Lodge - Northwest
                     Gander River - Southwest
                     Campgrounds - Southern
                     Pine Bluffs Trails - Southeast)
    ServiceStuff: id, parkId, serviceId
                    -connects services to park areas
What is the relationship between resources? 
    Multiple areas of the park can have multiple services 
        -many to many relationship between Services and ParkAreas
    The park can have multiple guests in one area, but one guest can't be in 
    multiple parts of the park
        -many to one relationship ParkAreas to Guests
Which modules should you create?
    A database to store all guest, park, and service info
        -will need to create an array of objects
    Main.js
        import all other modules to apply all code to html
    Guests
        will connect guests to what portion of the park they are in
    Services
        will connect which services apply in which portion of the park
    ParkAreas
        will have what guests in what portion and what services they can enjoy
    Index.html
        to create structure of the website
    Main.css
        to create the aesthetic of the site
    Details.css? (can have multiple .css to keep organized and separated)
        actually not sure if I need this, but the last couple projects had one, so...
What function should be in each module?
    database
        -export functions of each portion of the items in array
    main.js
        -something to put it all together to work in html but not sure how to do that yet
    guests
        -function that finds what guests are in what area
            will it need a parameter?
            need a for loop to iterate through array of parkArea and match to parkLocationId
    services
        -function that finds which services are in which parkArea
            parameter(s)?
            need 2 for loops?
                one to iterate through services
                one to iterate through parkAreas
What should each function return?
    Guests
        should return what parkArea the guest is in
    Services
        should return which services are for which parkArea and assign them to it
    ParkAreas
        should return services provided and guests in which area



*/