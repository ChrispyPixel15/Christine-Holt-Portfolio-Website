const colours = [
    {
        gradient: "bubbleGradDarkTeal",
        circle: "bubbleCircDarkTeal",
        highlight: "bubbleHighDarkTeal",
        num: 1
    },
    {
        gradient: "bubbleGradDarkOrange",
        circle: "bubbleCircDarkOrange",
        highlight: "bubbleHighDarkOrange",
        num: 2
    },
    {
        gradient: "bubbleGradDarkLightOrange",
        circle: "bubbleCircDarkLightOrange",
        highlight: "bubbleHighDarkLightOrange",
        num: 3
    },
    {
        gradient: "bubbleGradLightTeal",
        circle: "bubbleCircLightTeal",
        highlight: "bubbleHighLightTeal",
        num: 4
    },
    {
        gradient: "bubbleGradLight",
        circle: "bubbleCircLight",
        highlight: "bubbleHighLight",
        num: 5
    },
];

const sizes = ["20mm", "30mm", "40mm", "50mm", "60mm"];
const positions = ["5%", "10%", "20%", "30%", "40%", "50%"];

const splashScreen = document.querySelector(".splashScreen");

setInterval(() => {
    generateBubbles();
    deleteBubbles();
}, 1000);

function randomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBubbles() {
    const colour = colours[randomInt(0, 4)];

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const linGrad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svg.setAttribute('id', 'bubble')
    svg.setAttribute('width', sizes[randomInt(0, 4)]);
    svg.setAttribute('style', `left: ${positions[randomInt(0, 5)]}`);
    svg.setAttribute('version', '1.1');
    svg.setAttribute('viewBox', '0 0 210 297');
    g.setAttribute('stroke', '#000');
    g.setAttribute('stroke-linejoin', 'round');
    linGrad.setAttribute('id', `linearGradient${colour.num}`);
    linGrad.setAttribute('x1', '148.69');
    linGrad.setAttribute('x2', '60.573');
    linGrad.setAttribute('y1', '239.02');
    linGrad.setAttribute('y2', '58.365');
    linGrad.setAttribute('gradientUnits', 'userSpaceOnUse');
    stop1.setAttribute('offset', '0');
    stop1.setAttribute('class', colour.gradient);
    stop2.setAttribute('stop-color', '#fff');
    stop2.setAttribute('stop-opacity', '0');
    stop2.setAttribute('offset', '1');
    circle.setAttribute('class', colour.circle);
    circle.setAttribute('cx', '104.63')
    circle.setAttribute('cy', '148.69')
    circle.setAttribute('r', '100')
    circle.setAttribute('fill', `url(#linearGradient${colour.num})`)
    circle.setAttribute('style', 'paint-order:markers stroke fill')
    path.setAttribute('class', colour.highlight);
    path.setAttribute('d', 'm27.36 162.96c-0.58473-4.5318-0.46667-17.273 3.8113-29.387 4.2779-12.114 8.6651-20.275 13.563-27.417 4.8984-7.1419 12.909-14.373 18.579-18.988 5.6696-4.6155 16.219-9.8455 18.51-8.7402 2.2913 1.1052-12.018 13.926-20.639 25.176-8.6212 11.25-14.656 23.394-19.721 34.059-5.0649 10.666-7.4086 18.81-9.6681 26.709-2.2596 7.8986-3.8508 3.12-4.4355-1.4117z');
    path.setAttribute('fill', '#fff');
    path.setAttribute('fill-opacity', '.60172')
    path.setAttribute('stroke-width', '.7')
    path.setAttribute('style', 'paint-order:normal')
    linGrad.appendChild(stop1);
    linGrad.appendChild(stop2);
    defs.appendChild(linGrad);
    g.appendChild(circle);
    g.appendChild(path);
    svg.appendChild(defs);
    svg.appendChild(g);
    splashScreen.appendChild(svg);
}

function deleteBubbles() {
    const allBubbles = document.querySelectorAll('#bubble')

    for (let i = 0; i < allBubbles.length; i++) {
        const position = allBubbles[i].getBoundingClientRect();    
        
        if (position.top < 150) {
            allBubbles[i].remove();
        }
    }
}