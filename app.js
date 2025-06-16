console.log("App is running successfully...");


const btns = document.querySelectorAll(".buttons .btn");
const imgBox = document.querySelector(".gallery .images");
const imgs = document.querySelectorAll(".images .img");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".btn.active").classList.remove("active");
        btn.classList.add("active");
        console.log(`${btn.textContent} tab has been selected. ✅`);

        imgBox.classList.add("anime");
        setTimeout(() => {
            imgBox.classList.remove("anime");
        }, 700);

        imgs.forEach(img => {
            img.classList.remove("img-shrink");
            img.classList.add("img-expand");

            const btnType = parseInt(e.target.dataset.btn);
            const imgType = parseInt(img.dataset.cat);

            if (btnType !== imgType) {
                img.classList.add("img-shrink");
                img.classList.remove("img-expand");
            }

        });
    });

});

btns[0].addEventListener("click", () => {
    imgs.forEach(img => {
        img.classList.remove("img-shrink");
        img.classList.add("img-expand");
    });
});