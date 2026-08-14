document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");

    /* =========================================
       THEME SETUP
       DEFAULT = DARK MODE
       ========================================= */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        if (toggle) {
            toggle.checked = true;
        }
    } else {
        // Default theme = DARK
        document.body.classList.remove("light-mode");

        if (toggle) {
            toggle.checked = false;
        }

        // Save dark as default
        localStorage.setItem("theme", "dark");
    }


    /* =========================================
       LIGHT / DARK MODE TOGGLE
       ========================================= */

    if (toggle) {

        toggle.addEventListener("change", () => {

            if (toggle.checked) {

                // LIGHT MODE
                document.body.classList.add("light-mode");
                localStorage.setItem("theme", "light");

            } else {

                // DARK MODE
                document.body.classList.remove("light-mode");
                localStorage.setItem("theme", "dark");

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
