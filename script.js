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
            level: "68%",
            percentage: 68,
            logo: "vivado.png"
        },

        {
            name: "Proteus",
            level: "72%",
            percentage: 72,
            logo: "logos/proteus.png"
        },

        {
            name: "Altium Designer",
            level: "78%",
            percentage: 78,
            logo: "altium.png"
        },

        {
            name: "MS Office",
            level: "Word • Excel • PowerPoint",
            percentage: 70,
            logo: "office.png"
        },

        {
            name: "VS Code",
            level: "Development",
            percentage: 77,
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
