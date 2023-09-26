"use strict";

const wrapper = document.querySelector(".wrapper");
const btnPrev = document.querySelector(".btn--prev");
const btnNext = document.querySelector(".btn--next");
const btnLast = document.querySelector(".btn--last");

const randomNames = [
  "Karla Pope",
  "Gunnar Randall",
  "Christina Russell",
  "Weston Cardenas",
  "Raven O’Donnell",
  "Lian Valenzuela",
  "Henley Valentine",
  "Demetrius Mason",
  "Sienna Cantu",
  "Anakin Bowers",
  "Elisa Huff",
  "Finnley McDowell",
  "Rayna Stokes",
  "Santana Davis",
  "Mia Horton",
  "Garrett Bell",
  "Melody Mills",
  "Alex Brown",
  "Charlotte Bryant",
  "Jonah Cobb",
  "Aviana Hopkins",
  "Ali Neal",
  "Talia Pham",
  "Russell Fletcher",
  "Anaya Hess",
  "Lawrence Barrett",
  "Kendall Mueller",
  "Albert Hancock",
  "Katelyn Manning",
  "Seth Castro",
  "Eloise Grimes",
  "Harlan Yu",
  "Navy Wheeler",
  "Kenneth Friedman",
  "Aspyn Giles",
  "Kole McConnell",
  "Denise Joseph",
  "Kyle Norris",
  "Arielle Parsons",
  "Lewis Knight",
  "Gracie Ferguson",
  "Miguel Portillo",
  "Nathalie Lin",
  "Conor Fuentes",
  "Madeleine Fields",
  "Clayton Harrison",
  "Jasmine Summers",
  "Darius Duffy",
  "Addisyn Smith",
  "Liam Avila",
];

let currentPage = 1;
const resultsPerPage = 8;

const resPerPage = (page = currentPage) => {
  const start = (page - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  const last = Math.ceil(randomNames.length / resultsPerPage);

  return [randomNames.slice(start, end), last];
};

const renderData = () => {
  const data = resPerPage();
  const markup = data[0]
    .map((person) => {
      return `<div class="container">
    <p class="container__name">${person}</p>
  </div>`;
    })
    .join("");
  wrapper.innerHTML = markup;
};

window.addEventListener("DOMContentLoaded", renderData);

btnPrev.addEventListener("click", () => {
  if (currentPage > 1) currentPage--;
  renderData();
});

btnNext.addEventListener("click", () => {
  if (
    currentPage >= 1 &&
    currentPage < Math.ceil(randomNames.length / resultsPerPage)
  )
    currentPage++;
  renderData();
});

btnLast.addEventListener("click", async () => {
  const data = await resPerPage();
  currentPage = data[1];
  renderData();
});
