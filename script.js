// ================= MOBILE MENU =================

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});