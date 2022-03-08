const dogAPI = "http://localhost:3000/images/1"

fetch(dogAPI)
.then(res => res.json())
.then(displayImage)
.catch(console.err);

const dogImage = document.getElementById("card-image")
const dogLikes = document.getElementById("like-count")
const dogTitle = document.getElementById("card-title")
const dogList = document.getElementById("comments-list")
const dogButton = document.getElementById("like-button")

let likeCount
generalId("like-button").addEventListener("click", (e) => {
    likeCount += 1;
    renderLikes() 
})
generalId("comment-form").addEventListener("submit", postComments)

function generalId(id) {
    return document.getElementById(id)
}

function displayImage(dog) {
    likeCount = dog.likes;
    dogImage.src = dog.image;
    dogTitle.innerText = dog.title;
    replaceComments(dog.comments);
}
    
function renderLikes() {
    generalId("like-count").textContent = `${likeCount} likes`
}

function replaceComments(comments) {
    dogList.innerHTML = ""
    comments.forEach(renderComments)
}

function renderComments(comment) {
    const li = document.createElement("li");
    li.textContent = comment.content;
    dogList.append(li);
}

function postComments(e) {
    e.preventDefault();
    const newComment = e.target.comment.value;
    renderComments({content: newComment});
    e.target.reset();
}