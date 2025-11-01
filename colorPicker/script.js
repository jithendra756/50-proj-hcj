const redInput = document.querySelector(".redColor");
const greenInput = document.querySelector(".greenColor");
const blueInput = document.querySelector(".blueColor");
const body = document.getElementsByTagName("body")[0];
const btn = document.querySelector(".changeColor");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

HTMLElement.prototype.addOptions=function(){
    for(let i=0;i<256;i++){
        const option = document.createElement("option");
        option.value = i;
        option.textContent=i;
        this.appendChild(option);
    }};
    
red.addOptions();
green.addOptions();
blue.addOptions();

const setUpFocusShifts=(current, target)=>{
    current.addEventListener("keydown",(e)=>{
        
        if(e.key=="Enter")
        {
            if(current==btn){
                btn.style.opacity=1;
            }
            e.preventDefault();
            target.focus();
            if(target==btn){
                btn.style.opacity=0.6;
            }
        }
        
    })
}

const changeColor = ()=>{
    const r = redInput.value;
    const g = greenInput.value;
    const b = blueInput.value;

    if(r!="" && g!="" && b!=""){
        body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        console.warn("Please enter values for all RGB components.");
    }
    redInput.value="";
    greenInput.value="";
    blueInput.value="";
    // redInput.focus();
}

setUpFocusShifts(redInput, greenInput);
setUpFocusShifts(greenInput, blueInput);
setUpFocusShifts(blueInput, btn);
setUpFocusShifts(btn,redInput);


btn.addEventListener("click",changeColor);

btn.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        changeColor();
    }
})

    




