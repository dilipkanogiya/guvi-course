let container = document.createElement('div'); // create container div
container.setAttribute('class', 'container')
// Heading
var heading = document.createElement('h1');
heading.setAttribute('class', 'text-center'); // asiggn class text-center
heading.setAttribute('id','title'); // asiggn id title
heading.innerText = "Calculator";

// Para Description
var description = document.createElement('p');
description.setAttribute('class', 'description'); // asiggn class description
description.setAttribute('id','description'); // asiggn id description
description.innerText = "A Simple Calculator";

let calculator = document.createElement('div'); // create calculator div
calculator.innerHTML = `<input type="text" placeholder="0" value="" id="result">
                        <button onclick="Clear()" id="clear">AC</button>
                        <button onclick="del()" id="delete">DEL</button>
                        <button onclick="display('%')" id="percent">%</button>
                        <button onclick="display('/')" id="divide">/</button>
                        <button onclick="display('7')" id="7">7</button>
                        <button onclick="display('8')" id="8">8</button>
                        <button onclick="display('9')" id="9">9</button>
                        <button onclick="display('*')" id="multiply">x</button>
                        <button onclick="display('4')" id="4">4</button>
                        <button onclick="display('5')" id="5">5</button>
                        <button onclick="display('6')" id="6">6</button>
                        <button onclick="display('-')" id="subtract">-</button>
                        <button onclick="display('1')" id="equal">1</button>
                        <button onclick="display('2')" id="equal">2</button>
                        <button onclick="display('3')" id="equal">3</button>
                        <button onclick="display('+')" id="add">+</button>
                        <button onclick="display('.')" id="dot">.</button>
                        <button onclick="display('0')" id="zero">0</button>
                        <button onclick="Calculate()" class="equal" id="equal">=</button>
                    `
calculator.setAttribute('class', 'calculator')

container.append(heading,description,calculator)
document.body.append(container)

let outputResult = document.getElementById("result");
console.log(outputResult.value);
// Fun
function display(num){
    outputResult.value += num;
}
function Calculate(){
    try{
        outputResult.value = eval(outputResult.value)
    }
    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outputResult.value = "";
}
function del(){
    outputResult.value = outputResult.value.slice(0,-1)
}