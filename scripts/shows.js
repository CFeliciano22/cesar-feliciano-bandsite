const url = 'https://project-1-api.herokuapp.com/';
const apiKey ="61138c57-8e51-4652-a02b-4977e486d889";
const showsList = document.querySelector(".shows__container");

function getShows(){
    axios
    .get(url + "showdates?api_key=" + apiKey)
    .then(response => {
        console.log(response.data);
     let showsArray = response.data;   
        showsArray.forEach((show) => {
            let shows = document.createElement("li");
        shows.classList.add("shows__list");

        let dividerDate = document.createElement("div");
        
        let labelDate = document.createElement("label");
        labelDate.classList.add("shows__list--label", "shows__list--hidden");
        labelDate.innerText = "DATE";

        let dateContent = document.createElement("p");
        dateContent.classList.add("shows__list--demi");
        dateContent.innerText = new Date (Number(show.date)).toDateString();

        let lineBreak1 = document.createElement("br");

        let dividerVenue = document.createElement("div");

        let labelVenue = document.createElement("label");
        labelVenue.classList.add("shows__list--label","shows__list--hidden");
        labelVenue.innerText = "VENUE";

        let venueContent = document.createElement("p");
        venueContent.innerText = show.place;

        let lineBreak2 = document.createElement("br");

        let dividerLocation = document.createElement("div");

        let labelLocation = document.createElement("label");
        labelLocation.classList.add("shows__list--label", "shows__list--hidden");
        labelLocation.innerText = "LOCATION";

        let locationContent = document.createElement("p");
        locationContent.innerText = show.location;

        let lineBreak3 = document.createElement("br");

        let button = document.createElement("button");
        button.classList.add("shows__list--button");
        button.innerText = "BUY TICKETS";


        showsList.appendChild(shows);
        shows.appendChild(dividerDate);
        dividerDate.appendChild(labelDate);
        dividerDate.appendChild(dateContent);
        shows.appendChild(lineBreak1);
        shows.appendChild(dividerVenue);
        dividerVenue.appendChild(labelVenue);
        dividerVenue.appendChild(venueContent);
        shows.appendChild(lineBreak2);
        shows.appendChild(dividerLocation);
        dividerLocation.appendChild(labelLocation);
        dividerLocation.appendChild(locationContent);
        shows.appendChild(lineBreak3);
        shows.appendChild(button);
        });
    })
    .catch(err => {
        console.log(err);
    });
}

getShows();





// const showsList = document.querySelector(".shows__container");

// function showsDisplay(showsArray){
//     for (i = 0; i < showsArray.length; i=i+1){
        
//         let shows = document.createElement("li");
//         shows.classList.add("shows__list");

//         let dividerDate = document.createElement("div");
        
//         let labelDate = document.createElement("label");
//         labelDate.classList.add("shows__list--label", "shows__list--hidden");
//         labelDate.innerText = "DATE";

//         let dateContent = document.createElement("p");
//         dateContent.classList.add("shows__list--demi");
//         dateContent.innerText = showsArray[i].date;

//         let lineBreak1 = document.createElement("br");

//         let dividerVenue = document.createElement("div");

//         let labelVenue = document.createElement("label");
//         labelVenue.classList.add("shows__list--label","shows__list--hidden");
//         labelVenue.innerText = "VENUE";

//         let venueContent = document.createElement("p");
//         venueContent.innerText = showsArray[i].venue;

//         let lineBreak2 = document.createElement("br");

//         let dividerLocation = document.createElement("div");

//         let labelLocation = document.createElement("label");
//         labelLocation.classList.add("shows__list--label", "shows__list--hidden");
//         labelLocation.innerText = "LOCATION";

//         let locationContent = document.createElement("p");
//         locationContent.innerText = showsArray[i].location;

//         let lineBreak3 = document.createElement("br");

//         let button = document.createElement("button");
//         button.classList.add("shows__list--button");
//         button.innerText = "BUY TICKETS";


//         showsList.appendChild(shows);
//         shows.appendChild(dividerDate);
//         dividerDate.appendChild(labelDate);
//         dividerDate.appendChild(dateContent);
//         shows.appendChild(lineBreak1);
//         shows.appendChild(dividerVenue);
//         dividerVenue.appendChild(labelVenue);
//         dividerVenue.appendChild(venueContent);
//         shows.appendChild(lineBreak2);
//         shows.appendChild(dividerLocation);
//         dividerLocation.appendChild(labelLocation);
//         dividerLocation.appendChild(locationContent);
//         shows.appendChild(lineBreak3);
//         shows.appendChild(button);
//     }
// }

// showsDisplay(showsArray)