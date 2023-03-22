const likeButton = document.querySelector(".preference-header-like");
const likeDiv = document.getElementById("likeCardBundle");

const dislikeButton = document.querySelector(".preference-header-dislike");
const dislikeDiv = document.getElementById("dislikeCardBundle");

function showLikeDisplay () {
    dislikeDiv.classList.remove('active');
    dislikeDiv.style.zIndex = 0;

    likeDiv.classList.add('active');
    likeDiv.style.zIndex = 1000;
}

function showDislikeDisplay () {
    likeDiv.classList.remove('active');
    likeDiv.style.zIndex = 0;
    
    dislikeDiv.classList.add('active');
    dislikeDiv.style.zIndex = 1000;
}

likeButton.click();