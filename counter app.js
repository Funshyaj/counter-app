//declare variables 
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
let number = document.getElementById('number');
let count = 0;

addBtn.addEventListener("click", ()=>{
count++
number.textContent = count;
if (count > 0) {
	number.style.color = "green"} 

else if (count === 0){
	number.style.color = "black"}

})

subtractBtn.addEventListener("click", ()=>{
count--
number.textContent = count;
if (count < 0){
	number.style.color = "red"
}
else if (count === 0){
	number.style.color = "black"}
})