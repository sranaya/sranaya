let deadlineEl = document.getElementById("deadline");
let resultEl = document.getElementById("result")

let endDate = new Date();
let deadtime = new Date(endDate.getFullYear(),endDate.getMonth(),endDate.getDate()+10,11,30,0)

deadlineEl.textContent = `Give Away Ends on ${deadtime}`

let days;
let hours;
let minutes;
let seconds;
getdays = ()=>{
    let todayDate = new Date();
    let d = deadtime - todayDate ;
    days = Math.floor(d /(1000*60*60*24));
    days = (days < 10) ? `0${days}`: days

    let h = d - (60*60*1000*24*days);
    hours = Math.floor(h/(1000*60*60));
    hours = (hours < 10) ? `0${hours}`: hours

    let m = h - (hours*60*60*1000)
    minutes = Math.floor(m/(60*1000))
    minutes = (minutes < 10) ? `0${minutes}`: minutes


    let s = m - (minutes*60*1000);
    seconds = Math.floor(s/1000);
    seconds = (seconds < 10) ? `0${seconds}`: seconds
    resultEl.innerHTML = `
        <p class = "box">${days} <span>Days</span></p>
        <p class = "box">${hours} <span>Hours</span></p>
        <p class = "box">${minutes} <span>Minutes</span></p>
        <p class = "box">${seconds} <span>Seconds</span></p> `
}
setInterval(getdays,1000);
