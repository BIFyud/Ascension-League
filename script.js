/* =========================================
   ASCENSION LEAGUE
   JAVASCRIPT
========================================= */


/* =========================================
   ÉQUIPES
========================================= */

const teams = [
    {
        name: "VESTIGE",
        logo: "ae70ed55-5aea-4cc6-853d-d1abf48c6edc-removebg-preview.png",
        owner: "BIFyudGaming",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: true
    },

    {
        name: "ZENTRIX",
        logo: "vestige.png",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 3",
        short: "3",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 4",
        short: "4",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 5",
        short: "5",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 6",
        short: "6",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 7",
        short: "7",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    },

    {
        name: "TEAM 8",
        short: "8",
        owner: "Owner",
        players: ["Joueur 1", "Joueur 2", "Joueur 3"],
        champion: false
    }
];


const teamsGrid = document.getElementById("teamsGrid");


teams.forEach(team => {

    const card = document.createElement("article");

    card.className = "team-card";

    card.innerHTML = `
        ${team.champion ? '<div class="star">★</div>' : ''}

        <div class="mini-logo">
    <img src="${team.logo}" alt="Logo ${team.name}">
</div>

        <h3>${team.name}</h3>

        <p>OWNER : ${team.owner}</p>

        <p>3V3 ROCKET LEAGUE</p>
    `;

    teamsGrid.appendChild(card);

});


/* =========================================
   COUNTDOWN
========================================= */

/*
    MODIFIE CETTE DATE POUR LE PROCHAIN MATCH.

    Exemple :
    "2026-09-10T20:00:00+02:00"
*/

const matchDate = new Date("2026-09-10T20:00:00+02:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = matchDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* Fermer le menu après avoir cliqué */

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


/* =========================================
   APPARITION AU SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".team-card, .staff-card, .result, .schedule-item, .match-card, .hall-card"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%cASCENSION LEAGUE",
    "color:#c9a227;font-size:24px;font-weight:bold;"
);

console.log(
    "%cOnly the Best Ascend.",
    "color:#ffffff;font-size:14px;"
);
