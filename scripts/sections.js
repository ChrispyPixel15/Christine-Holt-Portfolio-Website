import { gameDevItems, graphicDesignItems, webDevItems } from "./data.js";

const root = "./";

const sections = [
    {
        id: "clientWork",
        class: "one",
        name: "client work",
        desc: "The stuff I did for other people",
        href: `${root}webDevelopment/index.html`
    },
    {
        id: "personalProjects",
        class: "two",
        name: "personal projects",
        desc: "The stuff I did for fun",
        href: `${root}graphicDesign/index.html`
    },
    {
        id: "about",
        class: "three",
        name: "about",
        desc: "The stuff you need to know about me",
        href: `${root}about/index.html`
    },
]

injectSections();

function injectSections() {
    const sects = document.querySelector('.sections');
    let blocks = sections.map((sect) => {
        return `
        <a class="sectionLink" href="${sect.href}">
            <div class="section ${sect.class} mute" id="${sect.id}">
                <h2>${sect.name}</h2>
                <p class="sectDesc">
                    ${sect.desc}
                </p>
            </div>
        </a>`
    }).join("");

    sects.innerHTML = blocks;
}

