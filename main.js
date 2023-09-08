const arrowRight = document.querySelector(".arrowRight");
const arrowLeft = document.querySelector(".arrowLeft");
const mainImg = document.querySelector(".container img");
console.log(mainImg)

let numImg = 5;
let activeSlider = 1;

arrowRight.addEventListener("click", () => {
    activeSlider++
    if (activeSlider <= numImg) {
        document.body.style.backgroundImage = `url(img/img${activeSlider}.jpg)`;
        mainImg.setAttribute("src", `img/img${activeSlider}.jpg`)

    } else {
        activeSlider = 1;
        document.body.style.backgroundImage = `url(img/img${activeSlider}.jpg)`;
        mainImg.setAttribute("src", `img/img${activeSlider}.jpg`)
    }
});

arrowLeft.addEventListener("click", () => {
    activeSlider--
    if (activeSlider <= 0) {
        activeSlider = numImg;
        document.body.style.backgroundImage = `url(img/img${activeSlider}.jpg)`;
        mainImg.setAttribute("src", `img/img${activeSlider}.jpg`)

    } else {
        document.body.style.backgroundImage = `url(img/img${activeSlider}.jpg)`;
        mainImg.setAttribute("src", `img/img${activeSlider}.jpg`)
    }
})