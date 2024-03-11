const img_card_go_pre = document.getElementById("img_card_go_pre");
const img_card_go_next = document.getElementById("img_card_go_next");
const img_card_imgs = document.querySelector(".img-card-imgs");

const img_card_list = [
    "img-card-img-1",
    "img-card-img-2",
    "img-card-img-3",
    "img-card-img-4",
    "img-card-img-5",
    "img-card-img-6",
    "img-card-img-7",
    "img-card-img-8",
    "img-card-img-9",
    "img-card-img-10",
    "img-card-img-11",
];

let list_idx = 0;

// element.style.setProperty('--background-image', 'url("new_image_url.jpg")');
img_card_go_pre.addEventListener("click", function() {
    if (list_idx === 0) {
        document.querySelector(`.${img_card_list[list_idx]}`).classList.add("active");
        img_card_imgs.style.setProperty('--background-image', `url("../img/recent_work/recent_work_${list_idx+1}.jpg")`);
        document.getElementById(`recent_card_img_btn_${list_idx+1}`).style.color = "rgba(255, 255, 255, 1)";
        for (let num=1; num<=11; num++) {
            if (num !== (list_idx+1)){
                document.getElementById(`recent_card_img_btn_${num}`).style.color = "rgba(255, 255, 255, 0.2)";
            }
        }
        return;
    } 
    --list_idx;
    document.querySelector(`.${img_card_list[list_idx]}`).classList.add("active");
    document.querySelector(`.${img_card_list[list_idx+1]}`).classList.remove("active");
    img_card_imgs.style.setProperty('--background-image', `url("../img/recent_work/recent_work_${list_idx+1}.jpg")`);
    document.getElementById(`recent_card_img_btn_${list_idx+1}`).style.color = "rgba(255, 255, 255, 1)";
    for (let num=1; num<=11; num++) {
        if (num !== (list_idx+1)){
            document.getElementById(`recent_card_img_btn_${num}`).style.color = "rgba(255, 255, 255, 0.2)";
        }
    }
});

img_card_go_next.addEventListener("click", function() {
    if (list_idx === img_card_list.length-1) {
        document.querySelector(`.${img_card_list[list_idx]}`).classList.add("active");
        img_card_imgs.style.setProperty('--background-image', `url("../img/recent_work/recent_work_${list_idx+1}.jpg")`);
        document.getElementById(`recent_card_img_btn_${list_idx+1}`).style.color = "rgba(255, 255, 255, 1)";
        for (let num=1; num<=11; num++) {
            if (num !== (list_idx+1)){
                document.getElementById(`recent_card_img_btn_${num}`).style.color = "rgba(255, 255, 255, 0.2)";
            }
        }
        return;
    }
    ++list_idx;
    document.querySelector(`.${img_card_list[list_idx]}`).classList.add("active");
    document.querySelector(`.${img_card_list[list_idx-1]}`).classList.remove("active");
    img_card_imgs.style.setProperty('--background-image', `url("../img/recent_work/recent_work_${list_idx+1}.jpg")`);
    document.getElementById(`recent_card_img_btn_${list_idx+1}`).style.color = "rgba(255, 255, 255, 1)";
    for (let num=1; num<=11; num++) {
        if (num !== (list_idx+1)){
            document.getElementById(`recent_card_img_btn_${num}`).style.color = "rgba(255, 255, 255, 0.2)";
        }
    }
});

img_card_go_pre.click();

// https://github.com/LinQuixote


document.querySelector(".https://github.com/LeLu815").addEventListener("click", function() {
    window.open("https://github.com/LeLu815");
});
