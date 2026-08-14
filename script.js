document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");

    // Stop if theme button is not found
    if (!toggle) {
        console.error("Theme toggle button not found!");
        return;
    }


    // =================================
    // DEFAULT THEME = DARK
    // =================================

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        // LIGHT MODE
        document.body.classList.remove("dark");
        toggle.textContent = "🌙";
        toggle.setAttribute("aria-label", "Switch to Dark Mode");

    } else {

        // DARK MODE
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
        toggle.setAttribute("aria-label", "Switch to Light Mode");

    }


    // =================================
    // DARK ↔ LIGHT TOGGLE
    // =================================

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        // If DARK MODE is active
        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            // Sun means clicking will switch to light
            toggle.textContent = "☀️";

            toggle.setAttribute(
                "aria-label",
                "Switch to Light Mode"
            );

        }

        // If LIGHT MODE is active
        else {

            localStorage.setItem("theme", "light");

            // Moon means clicking will switch to dark
            toggle.textContent = "🌙";

            toggle.setAttribute(
                "aria-label",
                "Switch to Dark Mode"
            );

        }

    });

});
