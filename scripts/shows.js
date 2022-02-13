const showsArray = [
    {
        date:"Mon Sept 06 2021",
        venue:"Ronald Lane",
        location:"San Francisco, CA"
    },
    {
        date:"Tue Sept 21 2021",
        venue:"Pier 3 East",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Oct 15 2021",
        venue:"View Lounge",
        location:"San Francisco, CA"
    },
    {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Nov 26 2021",
        venue:"Moscow Center",
        location:"San Francisco, CA"
    },
    {
        date:"Wed Dec 15 2021",
        venue:"Press Club",
        location:"San Francisco, CA"
    },
]

const showsList = document.querySelector(".shows__container");

function showsDisplay(showsArray){
    for (i = 0; i < showsArray.length; i=i+1){
        
        let shows = document.createElement("li");
        shows.classList.add("shows__list");

        let dividerDate = document.createElement("div");
        
        let labelDate = document.createElement("label");
        labelDate.classList.add("shows__list--label", "shows__list--hidden");
        labelDate.innerText = "DATE";

        let dateContent = document.createElement("p");
        dateContent.classList.add("shows__list--demi");
        dateContent.innerText = showsArray[i].date;

        let lineBreak1 = document.createElement("br");

        let dividerVenue = document.createElement("div");

        let labelVenue = document.createElement("label");
        labelVenue.classList.add("shows__list--label","shows__list--hidden");
        labelVenue.innerText = "VENUE";

        let venueContent = document.createElement("p");
        venueContent.innerText = showsArray[i].venue;

        let lineBreak2 = document.createElement("br");

        let dividerLocation = document.createElement("div");

        let labelLocation = document.createElement("label");
        labelLocation.classList.add("shows__list--label", "shows__list--hidden");
        labelLocation.innerText = "LOCATION";

        let locationContent = document.createElement("p");
        locationContent.innerText = showsArray[i].location;

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
    }
}

showsDisplay(showsArray)