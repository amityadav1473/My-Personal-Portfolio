// ===========================
// Current Year
// ===========================

const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

// ===========================
// Dark / Light Mode
// ===========================

const themeBtn = document.getElementById("theme-btn");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

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

// ===========================
// Active Navbar Link
// ===========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Typing Effect
// ===========================

const text = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",

];

const typing = document.querySelector(".hero-text h2");

let index = 0;

function changeText() {

    if (typing) {

        typing.innerHTML = text[index];

        index++;

        if (index >= text.length) {

            index = 0;

        }

    }

}

setInterval(changeText, 2500);

// ===========================
// Contact Form
// ===========================

// Replace with your EmailJS user ID
// ===========================
// Contact Form
// ===========================

emailjs.init({
    publicKey: "cgZzUguD1kvYAICGV",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const btn = form.querySelector("button");

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_f87fh61",
        "template_3r0248r",
        this
    )
    .then(() => {

        btn.innerHTML = "Message Sent ✅";
        form.reset();

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        }, 2000);

    })
    .catch((error) => {

        console.error(error);

        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';

        alert("Failed to send message!");
    });

});
// const form = document.querySelector("form");

// form?.addEventListener("submit", (e) => {

//     e.preventDefault();

//     alert("Thank you! Your message has been sent.");

//     form.reset();

// });