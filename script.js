document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    // If button is not found, stop
    if (!toggle) return;

    // Get saved theme
    const savedTheme = localStorage.getItem("theme");

    // Default = LIGHT MODE
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        toggle.textContent = "🌙";
    }

    // Toggle Dark / Light Mode
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            // Dark Mode
            localStorage.setItem("theme", "dark");
            toggle.textContent = "☀️";
        } else {
            // Light Mode
            localStorage.setItem("theme", "light");
            toggle.textContent = "🌙";
        }
    });
});
