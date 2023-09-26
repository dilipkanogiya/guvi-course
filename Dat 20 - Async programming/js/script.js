// https://x-colors.yurace.pro/api/random

let url = `https://x-colors.yurace.pro/api/random?number=20`;

function updateColor(color1,color2){
    let box = document.getElementById("box");
    box.style.backgroundImage = `linear-gradient(180deg,${color1},${color2}`
}

// function updateColor(hexcode){
//     let box = document.getElementById("box");
//     box.setAttribute('style', `background:${hexcode}`)
// }
async function changeColor() {
    let data = await fetch(url);
    let res = await data.json();
    // console.log(res);
    // console.log(res.hex);
    updateColor(res[0].hex,res[1].hex);
}
