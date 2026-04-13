import { webDevItems } from "./data.js";

const varsityItemsSection = document.querySelector('.varsityItemsSection');

addWebItems();

function addWebItems() {
    let varsityItems = webDevItems.map((item) => {
        return `<a class="webDevItem" id="${item.id}" href="../webDevelopment/webPortfolioItem.html?id=${item.id}">
                    <section class="${item.num}">
                        <img src="${item.img}" alt="Front Page image of the ${item.name} project."/>
                        <p class="desc">${item.name}</p> 
                    </section>                
                </a>
                `
    }).join("");

    varsityItemsSection.innerHTML = varsityItems;
}