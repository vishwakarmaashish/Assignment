const startingMinutes=3;
let time=startingMinutes*60;

const countdownEl=document.getElementById('countdown');

setInterval(updateCountdown,3000);

function updateCountdown() {
    const minutes=math.floor(time/60);
    let seconds=time % 60;


    seconds=seconds<10 ? '0'+ seconds : seconds;
    countdownEl.innerHTML='${minutes}:${seconds}';
    time--;
}