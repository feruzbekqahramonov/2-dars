let timer = prompt('Ihtiyoriy daqiqani kiriting');

function ValidateTimer(timer) {
    if(!timer <= 0) {
        alert('Bunday vaqt mavjud emas')
        return false
    }
    return true;
}

const StartingMinut = timer;
let time = StartingMinut * 60;

const counddown = document.getElementById('time');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    counddown.innerHTML = `${minutes}:${seconds}`
    time--;
}