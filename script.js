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
    /* =================================
       SOFTWARE SKILLS
       ================================= */

    const softwareSkills = [

        {
            name: "MATLAB",
            level: "75%",
            percentage: 75,
            logo: "matlab.png"
        },

        {
            name: "ADS",
            level: "78%",
            percentage: 78,
            logo: "ads.png"
        },

        {
            name: "Xilinx Vivado",
            level: "70",
            percentage: 70,
            logo: "vivado.png"
        },

        {
            name: "Proteus",
            level: "72",
            percentage: 72,
            logo: "proteus.png"
        },

        {
            name: "Altium Designer",
            level: "78",
            percentage: 78,
            logo: "altium.png"
        },

        {
            name: "MS Office",
            level: "Word • Excel • PowerPoint",
            percentage: 74,
            logo: "office.png"
        },

        {
            name: "VS Code",
            level: "Development",
            percentage: 71,
            logo: "vscode.png"
        }

    ];


    const container =
        document.getElementById("software-skills-container");


    if (container) {

        softwareSkills.forEach(function (skill) {

            const card = document.createElement("div");

            card.className = "skill-card";

            card.innerHTML = `

                <div class="skill-icon">

                    <img
                        src="${skill.logo}"
                        alt="${skill.name} logo"
                    >

                </div>


                <div class="skill-info">

                    <h3>${skill.name}</h3>

                    <p>${skill.level}</p>

                </div>


                <div class="skill-bar">

                    <div
                        class="skill-progress"
                        style="width:${skill.percentage}%"
                    ></div>

                </div>

            `;


            container.appendChild(card);

        });

    }

});

});
