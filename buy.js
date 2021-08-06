document.getElementById(add);


function addNumber(add){
    const numberElement = document.getElementById("number");
    var number = parseInt(numberElement.textContent);
    number++;
    numberElement.innerText = number;
    
}


document.getElementById(subtract);


function subNumber(subtract){
    const numberElement = document.getElementById("number");
    var number = parseInt(numberElement.textContent);
    number--;
    numberElement.innerText = number;
}