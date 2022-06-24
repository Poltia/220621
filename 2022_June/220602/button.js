let number = document.getElementById("number");

let plus = document.getElementById("plus");
plus.addEventListener("click",function() {
    number.innerText = Number(number.innerHTML) +1;
})
let minus = document.getElementById("minus");
minus.addEventListener("click",function() {
    number.innerText = Number(number.innerHTML) -1;
})