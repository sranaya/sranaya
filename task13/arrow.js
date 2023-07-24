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
    var pal=parseInt(number.toString().split("").reverse().join(""));
    document.getElementById("Result").textContent="palindrome:" +pal; 
}
function checkfactor() {
    let number= document.getElementById("Enter").value;
    var factors="";
    for (i=1; i<=number; i++) {
        if (number % i === 0){
            factors += i + " "
        } 
    }
    document.getElementById("Result").textContent="factors:" +factors; 
}







