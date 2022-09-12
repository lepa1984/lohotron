const allImg = document.querySelectorAll(".cup"),
    btnMix = document.getElementById("mix"),
    tablo = document.querySelector(".tablo"),
    cupes = document.querySelectorAll(".cupes img"),
    cupesText = document.querySelector(".cupes h2"),
    tabloWin = document.querySelector(".tablo-win");
let namPc = null;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

tablo.classList.add("display-none");
tabloWin.innerHTML = "";
/*window.addEventListener('resize',()=>{
imgWidth = allImg[0].offsetWidth;

})//*/
let count = 0;
btnMix.addEventListener("click", () => {
    cupes.forEach((cupe) => {
        cupe.classList.remove("display-none");
    });
    mixImg();
    namPc = getRandomInRange(1, 3);
    count = 0;
    for (const i of allImg) {
        i.src = "img/cup1.png";
    }

    btnMix.classList.add("display-none");
    tablo.classList.remove("display-none");
    tabloWin.innerHTML = "";
    cupesText.innerHTML = "";
    setTimeout(() => {
        tablo.innerHTML = "Выберите стаканчик:";
    }, 3400);
    allImg.forEach((e) => {
        e.addEventListener("click", verify);
    });
});

function mixImg() {
    allImg[0].classList.add("img1");
    allImg[1].classList.add("img2");
    allImg[2].classList.add("img3");
}

function verify() {
    count += 1;
    if (this.getAttribute("data-id") == namPc && count == 1) {
        cupesText.innerHTML = "Winner";
        tablo.classList.add("display-none");
        cupes.forEach((cupe) => {
            cupe.classList.add("display-none");
        });
    }

    if (this.getAttribute("data-id") == namPc) {
        this.src = "img/cup2.png";

        btnMix.classList.remove("display-none");

        tablo.innerHTML = "";
    } else {
        tablo.classList.add("display-none");
        btnMix.classList.remove("display-none");
        tabloWin.innerHTML = "Loser";
        this.src = "img/cup3.png";
    }

    allImg[0].classList.remove("img1");
    allImg[1].classList.remove("img2");
    allImg[2].classList.remove("img3");
}
