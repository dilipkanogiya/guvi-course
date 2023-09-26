// https://x-colors.yurace.pro/api/random

let url = `https://x-colors.yurace.pro/api/random`;

function updateColor(hexcode){
    let box = document.getElementById("box");
    box.setAttribute('style', `background:${hexcode}`)
}

async function changeColor() {
    let data = await fetch(url);
    let res = await data.json();
    // console.log(res);
    // console.log(res.hex);
    updateColor(res.hex);
}