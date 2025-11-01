const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

console.log(red);
console.log(blue);
console.log(green);


red.addOptions();
green.addOptions();
blue.addOptions();

const addOptions=()=>{
    for(let i=0;i<256;i++){
    const option = document.createElement("option");
    option.value = i;
    this.appendChild(option);
}};



