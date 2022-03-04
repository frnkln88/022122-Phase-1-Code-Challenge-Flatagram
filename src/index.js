//get request

const dogAPI = "http://localhost:3000/images/1"
fetch(dogAPI)
    .then((res)=>res.json())
    .then(data => displayImage(data))
    .catch(console.err);

//declaring constants

const dogPic = document.getElementById('card-image');
const dogTitle = document.getElementById("card-title");
const dogLikes = document.getElementById("like-count");
const dogComments = document.getElementById("comments-list");
const dogForm = document.getElementById("comment-form");
const dogList = document.getElementById("comments-list");
const dogLikeButton = document.getElementById("like-button");

//set initial like count of dog to 0 (this won't work if the image already has likes, but for this challenge that's not part of the criteria)

let likeCount = 0;

//general function for most deliverables

function displayImage(dog) {
    dogPic.src = dog.image;
    dogTitle.innerText=dog.title;
    dogComments.innerHTML = "What a cute dog!";
    dogLikeButton.addEventListener("click", (e) => {
        likeCount += 1;
        dogLikes.innerText = likeCount + " likes";
    })
    dogForm.addEventListener("submit", postComment)
}

//function to append comments

function postComment(e) {
    e.preventDefault();
    const newComment = document.createElement("li");
    newComment.textContent = e.target.comment.value;
    dogList.appendChild(newComment);
}
