const root = "../";

const navigationMenu = [
    {name: "client work", href: `${root}graphicDesign/index.html`},
    {name: "personal projects", href: `${root}webDevelopment/index.html`},
    {name: "about", href: `${root}about/index.html`},
];

const navList = document.querySelector(".navigationLinks");
const mobileMenu = document.querySelector(".mobileNavigation")

export function navigationBar(currentPage) {
    let links = navigationMenu.map((menuItem) => {
        return `<a class="navLink" id="${menuItem.name}" href="${menuItem.href}">${menuItem.name}</a>`
    }).join("");

    navList.innerHTML = links;
    mobileMenu.innerHTML = links;

    const linkList = document.querySelectorAll(".navLink");

    linkList.forEach((link) => {
        if (link.id !== currentPage) {
            link.setAttribute('id', "otherPage");
        }      
        else {
            link.setAttribute('id', "currentPage");
        }  
    });
}