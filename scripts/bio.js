const commentArray =[
    {
        name:"Connor Walton",
        date:"02/17/2021",
        comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

    },

    {
        name:"Emilie Beach",
        date:"01/09/2021",
        comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },

    {
        name:"Miles Acosta",
        date:"12/20/2020",
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]

const commentList = document.querySelector(".post__items")

function displayComments(commentArray) {
    for (i = 0; i < commentArray.length; i=i+1){

        let listItems = document.createElement("li");
        listItems.classList.add("post__list-items", "post__list-items--top");

        let postHeader = document.createElement("div");
        postHeader.classList.add("post__header");

        let headName = document.createElement("h3");
        headName.innerText = commentArray[i].name;

        let headDate = document.createElement("p");
        headDate.classList.add("post__header--date");
        headDate.innerText = commentArray[i].date;

        let text = document.createElement("p");
        text.classList.add("post__comment");
        text.innerText = commentArray[i].comment;

        let avatar = document.createElement("img");
        avatar.classList.add("post__avatar");


        commentList.appendChild(listItems);
        listItems.appendChild(postHeader);
        postHeader.appendChild(headName);
        postHeader.appendChild(headDate);
        listItems.appendChild(text);
        listItems.appendChild(avatar);
    }
}

displayComments(commentArray);



let formCta = document.querySelector(".comments__textbox")


formCta.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nameText = e.target.nameText.value;
    let commentText = e.target.commentText.value;

    if (nameText && commentText){
        commentList.innerText = "";
        commentArray.unshift({
            name: nameText,
            comment: commentText
        });
        for(i = 0; i < commentArray.length; i=i+1){
            displayComments(commentArray);
        }
    }
    document.querySelector(".comments__textbox--name").value = "";
    document.querySelector(".comments__textbox--comment").value = "";
}

)