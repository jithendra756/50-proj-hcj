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
                btn.style.transform = "scale(1)";                
                btn.style.transition = "transform 0.2s";
            }
            e.preventDefault();
            if(current!=btn){
                current.style.transform= "scale(1.0)";
                current.style.transition= "transform 0.2s";
            }
            target.focus();
            if(target!=btn){
                target.style.transform= "scale(1.1)";
                target.style.transition= "transform 0.2s";
            }

            if(target==btn){
                btn.style.opacity=0.6;
                btn.style.transform = "scale(1.05)";
                btn.style.transition = "transform 0.2s";
            }
        }
        
    })
}

const changeColor = ()=>{
    const r = redInput.value;
    const g = greenInput.value;
    const b = blueInput.value;

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        alert("Please enter RGB values between 0 and 255");
        return;
    }
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


const elements = [redInput, greenInput, blueInput, btn];
elements.forEach((e,i) => {
    setUpFocusShifts(e,elements[(i+1) % elements.length])
});
// setUpFocusShifts(redInput, greenInput);
// setUpFocusShifts(greenInput, blueInput);
// setUpFocusShifts(blueInput, btn);
// setUpFocusShifts(btn,redInput);


btn.addEventListener("click",changeColor);

btn.addEventListener("keydown", (e)=>{
    if(e.key == "Enter"){
        changeColor();
    }
})

    




