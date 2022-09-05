function doSum() {
   let num1 = document.querySelector("#no1").value
    let num2 = document.querySelector("#no2").value
num1 = Number(num1)
num2 = Number(num2)
console.log("number no 1 ",num1)
console.log("number no 2 ",num2)
let  res = num1 + num2;
console.log("add" , res)
document.querySelector("#result").innerHTML = "The Result of addition is " + res;
}



function doSub() {
    let num1 = document.querySelector("#no1").value
     let num2 = document.querySelector("#no2").value
 num1 = Number(num1)
 num2 = Number(num2)
 console.log("number no 1 ",num1)
 console.log("number no 2 ",num2)
  let res = num1 - num2;
console.log("sub" , res)
document.querySelector("#result").innerHTML = "The Result of subraction is " + res;
}


function doDiv() {
    let num1 = document.querySelector("#no1").value
     let num2 = document.querySelector("#no2").value
 
 num1 = Number(num1)
 num2 = Number(num2)
 console.log("number no 1 ",num1)
 console.log("number no 2 ",num2)
 
 
 let res = num1 / num2;
 
console.log("div" , res)

document.querySelector("#result").innerHTML = "The Result of divide is " + res;
}
function doMul() {
    let num1 = document.querySelector("#no1").value
     let num2 = document.querySelector("#no2").value
 
 num1 = Number(num1)
 num2 = Number(num2)
 console.log("number no 1 ",num1)
 console.log("number no 2 ",num2)
 
 
 let res = num1 * num2;
 
console.log("mul" , res)

document.querySelector("#result").innerHTML = "The Result of multipliaction is " + res;
}