document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");

    /* =========================================
   THEME SETUP
   DEFAULT = DARK MODE
   ========================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.remove("dark");
    toggle.textContent = "🌙";
} else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
}


/* =========================================
   LIGHT / DARK MODE TOGGLE
   ========================================= */

if (toggle) {
    toggle.addEventListener("click", () => {

        if (document.body.classList.contains("dark")) {

            // Switch to LIGHT
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";

        } else {

            // Switch to DARK
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";

        }

    });
}

    /* =========================================
       SMOOTH SCROLLING
       ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =========================================
       MOBILE MENU
       ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

    }


    /* =========================================
       CLOSE MOBILE MENU AFTER CLICK
       ========================================= */

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu) {
                navMenu.classList.remove("active");
            }

        });

    });

});
