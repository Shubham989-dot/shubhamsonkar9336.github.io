document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");

    if (!toggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    // Default theme = LIGHT
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    applyTheme(initialTheme);

    toggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark")
            ? "light"
            : "dark";

        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        const isDark = theme === "dark";

        document.body.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Icon shows the mode that will be activated next
        toggle.textContent = isDark ? "☀️" : "🌙";

        toggle.setAttribute(
            "aria-label",
            isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
        );

        toggle.setAttribute("aria-pressed", String(isDark));

        toggle.title = isDark
            ? "Switch to Light Mode"
            : "Switch to Dark Mode";
    }
});
