function square() {
    let number = document.getElementById("Enter").value;
    let output = number * number;
    document.getElementById("Result").textContent= "square: " + output;
}
function evenorodd() {
    let number = document.getElementById("Enter").value;
    let output= number % 2 ===0 ? "even" : "odd";
    document.getElementById("Result").textContent= "evenorodd: " + output;
}
function checkprime() {
        let number= document.getElementById("Enter").value;
        let k = parseInt(number)
        let isPrime = true;
        for(let i = 2;i < k;i++){
            if(k %i === 0){
                isPrime = false;
                break;
            }
        }
        let res = isPrime ? "prime" : "not prime";
        document.getElementById("Result").textContent="prime:" +res;  
}
function checkpalindrome() {
    let number= document.getElementById("Enter").value;
    let rev=number.split("").reverse().join();
    if(rev === number) {
    document.getElementById("Result").textContent="palindrome"
    }else {
    document.getElementById("Result").textContent="not palindrome"
    }
}
function REVERSE() {
    let number= document.getElementById("Enter").value;
    var rev=parseInt(number.toString().split("").reverse().join(""));
    document.getElementById("Result").textContent="reverse:" +rev; 
}
function ARMSTRONG() {
    let number= document.getElementById("Enter").value;
    let sum=0;
    let len=number.length;
    for (i of number) {
        sum=sum+parseInt(i)**len;
    }
    if (sum == number){
    document.getElementById("Result").textContent="it is armstrong num"; 
} else{
    document.getElementById("Result").textContent="it is not armstrong num";
}
}
function ADDITION() {
    let number1 = document.getElementById("first").value;
    let number2 = document.getElementById("second").value;
    let sum=parseFloat(number1) + parseFloat(number2);
    document.getElementById("output").textContent= "ADDITION " + sum;
}
function SUBTRACTION() {
    let number1 = document.getElementById("first").value;
    let number2 = document.getElementById("second").value;
    let diff=parseFloat(number1) - parseFloat(number2);
    document.getElementById("output").textContent= "SUBTRACTION " + diff;
}
function MULTIPLICATION() {
    let number1 = document.getElementById("first").value;
    let number2 = document.getElementById("second").value;
    let prod=parseFloat(number1) * parseFloat(number2);
    document.getElementById("output").textContent= "PRODUCT" + prod;
}
function DIVISION() {
    let number1 = document.getElementById("first").value;
    let number2 = document.getElementById("second").value;
    let div=parseFloat(number1) / parseFloat(number2);
    document.getElementById("output").textContent= "DIVISION " + div;
}
function MODULOUS() {
    let number1 = document.getElementById("first").value;
    let number2 = document.getElementById("second").value;
    let mod=parseFloat(number1) % parseFloat(number2);
    document.getElementById("output").textContent= "MODULOUS " + mod;
    }