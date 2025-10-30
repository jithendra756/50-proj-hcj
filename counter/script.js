const count = document.getElementById("counter");
console.log(count);

const ani = ()=>{
    count.style.transition = "transform 0.2s ease";
    count.style.transform = "scale(1.3)";
    setTimeout(()=>(count.style.transform = "scale(1.0)"),150);
} 

let val = 0;
const increment = ()=>{
    val++;
    ani();
    count.textContent = val;
    console.log(val);
};

const decrement = ()=>{
    val--;
    ani();
    count.textContent = val;
    console.log(val);

};

const resetFunc = ()=>{
    val = 0;
    ani();
    count.textContent = val;
    console.log(val);
}

