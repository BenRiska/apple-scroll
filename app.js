const section1 = document.querySelector(".section1")
const section2 = document.querySelector(".section2")
const section3 = document.querySelector(".section3")
const section4 = document.querySelector(".section4")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")

let section1_height = section1.offsetHeight;

const section2trigger = section1_height; 
const section3trigger = section1_height * 2;
const section4trigger = section1_height * 3;

window.addEventListener('scroll', () => {
    // how far youve scrolled down
    let scroll = window.pageYOffset;

    let img1speed = img1.dataset.speed;
    img1.style.transform = `translateY(-${scroll * img1speed}px)`;
    img1.style.opacity = - scroll / (section1_height / 3) + 1;

    if(scroll > section2trigger){
        let img2speed = img2.dataset.speed;
        img2.style.transform = `translateY(-${(scroll - section2trigger) * img2speed}px)`;
        img2.style.opacity = - scroll / (section1_height / 2.2) + 3;
    }

    if(scroll > section3trigger){
        let img3speed = img3.dataset.speed;
        img3.style.transform = `translateY(-${(scroll - section3trigger) * img3speed}px)`;
        img3.style.opacity = - scroll / (section1_height / 2.1) + 5;
    }

    if(scroll > section4trigger){
        let img4speed = img4.dataset.speed;
        img4.style.transform = `translateY(-${(scroll - section4trigger) * img4speed}px)`;
        img4.style.opacity = - scroll / (section1_height / 2.1) + 7;
    }

})