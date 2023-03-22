const img_card_go_pre_copy = document.getElementById("img_card_go_pre_module");
const img_card_go_next_copy = document.getElementById("img_card_go_next_module");
const img_card_imgs_copy = document.querySelector(".img-card-imgs_module");

const img_card_list_copy = [
    "img-card-img-1_module",
    "img-card-img-2_module",
    "img-card-img-3_module",
    "img-card-img-4_module",
    "img-card-img-5_module",
    "img-card-img-6_module",
    "img-card-img-7_module",
    "img-card-img-8_module",
    "img-card-img-9_module",
    "img-card-img-10_module",
];

let list_idx_copy = 0;

// element.style.setProperty('--background-image', 'url("new_image_url.jpg")');
img_card_go_pre_copy.addEventListener("click", function() {
    if (list_idx_copy === 0) {
        document.querySelector(`.${img_card_list_copy[list_idx_copy]}`).classList.add("active");
        img_card_imgs_copy.style.setProperty('--background-image', `url("../img/about_dog_cat/cat_dog_${list_idx_copy+1}.jpg")`);
        document.getElementById(`recent_card_img_btn_${list_idx_copy+1}_module`).style.color = "rgba(255, 255, 255, 1)";
        for (let num=1; num<=10; num++) {
            if (num !== (list_idx_copy+1)){
                document.getElementById(`recent_card_img_btn_${num}_module`).style.color = "rgba(255, 255, 255, 0.2)";
            }
        }
        return;
    } 
    --list_idx_copy;
    document.querySelector(`.${img_card_list_copy[list_idx_copy]}`).classList.add("active");
    document.querySelector(`.${img_card_list_copy[list_idx_copy+1]}`).classList.remove("active");
    img_card_imgs_copy.style.setProperty('--background-image', `url("../img/about_dog_cat/cat_dog_${list_idx_copy+1}.jpg")`);
    document.getElementById(`recent_card_img_btn_${list_idx_copy+1}`).style.color = "rgba(255, 255, 255, 1)";
    for (let num=1; num<=10; num++) {
        if (num !== (list_idx_copy+1)){
            document.getElementById(`recent_card_img_btn_${num}`).style.color = "rgba(255, 255, 255, 0.2)";
        }
    }
});

img_card_go_next_copy.addEventListener("click", function() {
    if (list_idx_copy === img_card_list_copy.length-1) {
        document.querySelector(`.${img_card_list_copy[list_idx_copy]}`).classList.add("active");
        img_card_imgs_copy.style.setProperty('--background-image', `url("../img/about_dog_cat/cat_dog_${list_idx_copy+1}.jpg")`);
        document.getElementById(`recent_card_img_btn_${list_idx_copy+1}_module`).style.color = "rgba(255, 255, 255, 1)";
        for (let num=1; num<=11; num++) {
            if (num !== (list_idx_copy+1)){
                document.getElementById(`recent_card_img_btn_${num}_module`).style.color = "rgba(255, 255, 255, 0.2)";
            }
        }
        return;
    }
    ++list_idx_copy;
    document.querySelector(`.${img_card_list_copy[list_idx_copy]}`).classList.add("active");
    document.querySelector(`.${img_card_list_copy[list_idx_copy-1]}`).classList.remove("active");
    img_card_imgs_copy.style.setProperty('--background-image', `url("../img/about_dog_cat/cat_dog_${list_idx_copy+1}.jpg")`);
    document.getElementById(`recent_card_img_btn_${list_idx_copy+1}_module`).style.color = "rgba(255, 255, 255, 1)";
    for (let num=1; num<=11; num++) {
        if (num !== (list_idx_copy+1)){
            document.getElementById(`recent_card_img_btn_${num}_module`).style.color = "rgba(255, 255, 255, 0.2)";
        }
    }
});

img_card_go_pre_copy.click();

// https://github.com/LinQuixote


document.querySelector(".img-card-btn").addEventListener("click", function() {
    window.open("https://github.com/LinQuixote");
});



const img_background_box = document.querySelector(".img-background-box");
img_background_box.addEventListener("click", function() {
    document.querySelector(".img-card-section_module").classList.add("click-fade-out");
});

const img_card_section_x_btn_emoji = document.getElementById("img_card_section_x_btn_emoji");
img_card_section_x_btn_emoji.addEventListener("click", function() {
    document.querySelector(".img-card-section_module").classList.remove("click-fade-out");
})