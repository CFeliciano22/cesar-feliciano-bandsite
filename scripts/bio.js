const url = "https://project-1-api.herokuapp.com/";

const apiKey = "61138c57-8e51-4652-a02b-4977e486d889";
const commentList = document.querySelector(".post__items");
axios
    .get(url + "comments?api_key=" + apiKey)
        .then(response => {
            console.log(response.data);
            let commentArray = response.data;

            commentArray.forEach((item) => {

                let listItems = document.createElement("li");
                listItems.classList.add("post__list-items", "post__list-items--top");

                let postHeader = document.createElement("div");
                postHeader.classList.add("post__header");

                let headName = document.createElement("h3");
                headName.innerText = item.name;

                let headDate = document.createElement("p");
                headDate.classList.add("post__header--date");
                headDate.innerText = item.timestamp;

                let text = document.createElement("p");
                text.classList.add("post__comment");
                text.innerText = item.comment;

                let avatar = document.createElement("img");
                avatar.classList.add("post__avatar");


                commentList.appendChild(listItems);
                listItems.appendChild(postHeader);
                postHeader.appendChild(headName);
                postHeader.appendChild(headDate);
                listItems.appendChild(text);
                listItems.appendChild(avatar);
            });
            
        })
        .catch(err => {
            console.log(err);
        });




let formCta = document.querySelector(".comments__textbox");


formCta.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nameText = e.target.nameText.value;
    let commentText = e.target.commentText.value;
    let newComment = {
        name: nameText,
        comment: commentText
    }

    if (nameText && commentText){
        commentList.innerText = "";
            axios
                .post(url + "comments?api_key=" + apiKey, newComment)
                    .then(response => {
                        console.log(response);
                        axios
                            .get(url + "comments?api_key=" + apiKey)
                                .then(response => {
                                    console.log(response.data);
                                    let commentArray = response.data;
                                    commentArray.forEach((item) => {

                                        let listItems = document.createElement("li");
                                        listItems.classList.add("post__list-items", "post__list-items--top");
                        
                                        let postHeader = document.createElement("div");
                                        postHeader.classList.add("post__header");
                        
                                        let headName = document.createElement("h3");
                                        headName.innerText = item.name;
                        
                                        let headDate = document.createElement("p");
                                        headDate.classList.add("post__header--date");
                                        headDate.innerText = item.timestamp;
                        
                                        let text = document.createElement("p");
                                        text.classList.add("post__comment");
                                        text.innerText = item.comment;
                        
                                        let avatar = document.createElement("img");
                                        avatar.classList.add("post__avatar");
                        
                        
                                        commentList.appendChild(listItems);
                                        listItems.appendChild(postHeader);
                                        postHeader.appendChild(headName);
                                        postHeader.appendChild(headDate);
                                        listItems.appendChild(text);
                                        listItems.appendChild(avatar);
                                    });
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                    });
                    
                    
                  
    }
    document.querySelector(".comments__textbox--name").value = "";
    document.querySelector(".comments__textbox--comment").value = "";
})



// displayComments(commentArray);

// const commentList = document.querySelector(".post__items")

// function displayComments(commentArray) {
//     for (i = 0; i < commentArray.length; i=i+1){

//         let listItems = document.createElement("li");
//         listItems.classList.add("post__list-items", "post__list-items--top");

//         let postHeader = document.createElement("div");
//         postHeader.classList.add("post__header");

//         let headName = document.createElement("h3");
//         headName.innerText = commentArray[i].name;

//         let headDate = document.createElement("p");
//         headDate.classList.add("post__header--date");
//         headDate.innerText = commentArray[i].date;

//         let text = document.createElement("p");
//         text.classList.add("post__comment");
//         text.innerText = commentArray[i].comment;

//         let avatar = document.createElement("img");
//         avatar.classList.add("post__avatar");


//         commentList.appendChild(listItems);
//         listItems.appendChild(postHeader);
//         postHeader.appendChild(headName);
//         postHeader.appendChild(headDate);
//         listItems.appendChild(text);
//         listItems.appendChild(avatar);
//     }
// }

// displayComments(commentArray);



// const commentArray =[
//     {
//         name:"Connor Walton",
//         date:"02/17/2021",
//         comment:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."

//     },

//     {
//         name:"Emilie Beach",
//         date:"01/09/2021",
//         comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },

//     {
//         name:"Miles Acosta",
//         date:"12/20/2020",
//         comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     },
// ]