const hourHand = document.querySelector(".hour")
const minHand = document.querySelector(".min")
const secHand = document.querySelector(".sec")

const timerto2025 = document.querySelector(".timer-o-cont")
const mainNY = document.querySelector(".newYear")

function clockTick(){

    let date = new Date()
    let hour = date.getHours()%12
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    // console.log(hour+":"+mins+":"+secs)

    hourHand.style.rotate = `${hour*30-90}deg`
    minHand.style.rotate = `${mins*6-90}deg`
    secHand.style.rotate = `${secs*6-90}deg`

}

setInterval(clockTick,1000)
clockTick()


timeele=document.querySelector(".time");
dateele=document.querySelector(".date");
let endDate = new Date('December 31, 2024 24:00:00');
let endTime = endDate.getTime();



function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;
    if (endTime <= todayTime) {
        clearInterval(i);
        document.querySelector(".time").innerHTML = '<h1>Countdown Has Expired</h1>';
        timerto2025.style.display="none";
        mainNY.style.display = "grid"
        // aftermid.style.display="flex";
    } else {
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        timeele.textContent=("0" + hrsLeft).slice(-2) + " : " +("0"+minsLeft).slice(-2) + " : " + ("0"+secsLeft).slice(-2);
    }
}
let i = setInterval(countdown, 1000);
countdown();