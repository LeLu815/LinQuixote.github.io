const detail_info_x_emoji = document.getElementById("detail_info_x_emoji");
const detailInfoSection = document.getElementById("detailInfoSection");
const viewMoreBtn = document.getElementById("viewMoreBtn");


viewMoreBtn.addEventListener("click", function() {
    detailInfoSection.classList.add("detail-info-section-reveal");
    detailInfoSection.style.zIndex = 5;
});

detail_info_x_emoji.addEventListener('click', function() {
    detailInfoSection.classList.remove("detail-info-section-reveal");
    detailInfoSection.style.zIndex = -1;
});