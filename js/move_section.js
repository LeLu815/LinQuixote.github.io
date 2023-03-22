function smoothScroll(event) {
    event.preventDefault();
    
    const sectionId = this.dataset.section;
    const section = document.querySelector(sectionId);
    
    const real_y_position = Number(sectionId.split().pop()) === 1 ? window.pageYOffset + section.getBoundingClientRect().top : ((window.pageYOffset) + (section.getBoundingClientRect().top) - 60)
    console.log(
        ((window.pageYOffset) + (section.getBoundingClientRect().top) - 100)
    )
    window.scrollTo({
    top: real_y_position,
    behavior: "smooth"
    });
}
  
// 모든 스크롤 링크에 이벤트 핸들러 등록
const scrollLinks = [
    'self_intro', 'recent_work', 'skill_bundle', 'my_like', "logo",
];

scrollLinks.forEach(link => {
    // console.log(document.getElementById(`${link}`));
    document.getElementById(`${link}`).addEventListener("click", smoothScroll);
});