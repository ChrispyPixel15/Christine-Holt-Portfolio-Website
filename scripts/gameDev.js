import { gameDevItems } from "./data.js";

const varsityItemsSection = document.querySelector('.varsityItemsSection');

addWebItems();

function addWebItems() {
    let varsityItems = gameDevItems.map((item) => {
            return `<a class="gameDevItem" id="${item.id}" href="../gameDevelopment/webPortfolioItem.html?id=${item.id}">
                    <section class="itemVis">
                        <img src="${item.img}" alt="Front Page image of the ${item.name} project."/>
                        <p class="desc">${item.name}</p> 
                    </section>                
                </a>`
        }).join("");
    
        varsityItemsSection.innerHTML = varsityItems;
}