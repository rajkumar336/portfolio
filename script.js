// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".top-nav a");
const sideItems = document.querySelectorAll(".side-item");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    // Top navigation

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });


    // Side navigation

    sideItems.forEach(item => {

        item.classList.remove("active");

        const link = item.querySelector("a");

        if (link.getAttribute("href") === "#" + current) {
            item.classList.add("active");
        }

    });

});


// ================= SCROLL TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});