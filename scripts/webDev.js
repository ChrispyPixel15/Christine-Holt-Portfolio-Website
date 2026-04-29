import { webDevItems } from "./data.js";

const varsityItemsSection = document.querySelector('.pProjectsSection');
const nextButt = document.querySelector(".next");
const prevButt = document.querySelector(".previous");

let currentCard = -1;

addWebItems();

function addWebItems() {
    currentCard = (currentCard + 1) % webDevItems.length;
    varsityItemsSection.innerHTML = `
        <li>
            <a class="webDevItem" id="${webDevItems[currentCard].id}" 
               href="../webDevelopment/webPortfolioItem.html?id=${webDevItems[currentCard].id}">
                <section class="${webDevItems[currentCard].num}">
                    <img src="${webDevItems[currentCard].img}" 
                         alt="Front Page image of the ${webDevItems[currentCard].name} project."/>
                    <p class="desc">${webDevItems[currentCard].name}</p> 
                </section>                
            </a>
        </li>`;
}

function negaddWebItems() {
    currentCard = currentCard > 0 ? (currentCard - 1) % webDevItems.length : webDevItems.length - 1;
    varsityItemsSection.innerHTML = `
        <li>
            <a class="webDevItem" id="${webDevItems[currentCard].id}" 
               href="../webDevelopment/webPortfolioItem.html?id=${webDevItems[currentCard].id}">
                <section class="${webDevItems[currentCard].num}">
                    <img src="${webDevItems[currentCard].img}" 
                         alt="Front Page image of the ${webDevItems[currentCard].name} project."/>
                    <p class="desc">${webDevItems[currentCard].name}</p> 
                </section>                
            </a>
        </li>`;
}

nextButt.addEventListener('click', addWebItems)

prevButt.addEventListener('click', negaddWebItems)



