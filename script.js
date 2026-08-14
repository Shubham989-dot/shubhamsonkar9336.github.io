document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    // Default theme = DARK
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.remove("dark");
        toggle.textContent = "☀️";
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggle.textContent = "🌙";
    }

    // Toggle dark/light mode
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            toggle.textContent = "🌙";
        } else {
            localStorage.setItem("theme", "light");
            toggle.textContent = "☀️";
        }
    });
});
