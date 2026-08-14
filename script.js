"use strict";

console.log("SCRIPT.JS LOADED");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM LOADED");

    const button = document.getElementById("theme-toggle");

    if (!button) {
        console.error("ERROR: theme-toggle button not found");
        return;
    }

    function setTheme(theme) {

        if (theme === "dark") {
            document.body.classList.add("dark");

            button.textContent = "☀️";
            button.setAttribute("aria-label", "Switch to Light Mode");

            localStorage.setItem("theme", "dark");

            console.log("Dark Mode ON");

        } else {

            document.body.classList.remove("dark");

            button.textContent = "🌙";
            button.setAttribute("aria-label", "Switch to Dark Mode");

            localStorage.setItem("theme", "light");

            console.log("Light Mode ON");
        }
    }

    // DEFAULT = LIGHT
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    // MANUAL SWITCH
    button.onclick = function () {

        if (document.body.classList.contains("dark")) {
            setTheme("light");
        } else {
            setTheme("dark");
        }

    };

});
