
const imgAddressList = [
    "./img/my_img_singing2-1.png",
    "./img/my_img_singing3-1.png",
]
let timeOut;
let imgNum = 0;

function ShowDefaultRotate() {

    if (imgNum < imgAddressList.length) {
        const imgSinging = document.getElementById("imgSinging");
        imgSinging.style.backgroundImage = `url(${imgAddressList[imgNum]})`;
        timeOut = setTimeout(ShowDefaultRotate, 2000);
        
    } else if (imgNum >= imgAddressList.length) {
        imgNum = 0;
        const imgSinging = document.getElementById("imgSinging");
        imgSinging.style.backgroundImage = `url(${imgAddressList[imgNum]})`;
        timeOut = setTimeout(ShowDefaultRotate, 2000);
    }

    imgNum ++;
}

function startAnimation() {
    timeOut = window.setTimeout(ShowDefaultRotate, 2000);
}
window.onload = startAnimation;


// 초기에는 onload 되기 때문에 자동 스트리밍을 한다.
let streaming = true;

const img_singing_play = document.getElementById("img_singing_play");
const img_singing_stop = document.getElementById("img_singing_stop");
// const imgSinging = document.getElementById("imgSinging");

img_singing_play.style.display = "none";
img_singing_stop.style.display = "none";

document.getElementById("imgSinging").addEventListener("click", function() {
    if (!streaming) {
        streaming = true;
        startAnimation();
        img_singing_play.style.display = "block";
        img_singing_play.style.display.fadeIn = "block";
    } else {
        streaming = false;
        clearTimeout(timeOut);
    }
});


document.getElementById("imgSinging").addEventListener("mouseover", function() {
    console.log("mouseover");
    if (!streaming) {
        console.log(img_singing_play);
        img_singing_play.style.display = "block";
    } else {
        img_singing_stop.style.display = "block";
    }
});

document.getElementById("imgSinging").addEventListener("mouseleave", function() {
    img_singing_play.style.display = "none";
    img_singing_stop.style.display = "none";
});