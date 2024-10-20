let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

let hr1 = document.getElementById('hour1');
let min1 = document.getElementById('minute1');
let sec1 = document.getElementById('second1');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourR = (30*hh) + (mm/2);
    let minR = (6*mm);
    let secR = (6*ss);

    hr.style.transform = `rotate(${hourR}deg)`;
    min.style.transform = `rotate(${minR}deg)`;
    sec.style.transform = `rotate(${secR}deg)`;

    hr1.style.transform = `rotate(${hourR + 180}deg)`;
    min1.style.transform = `rotate(${minR + 180}deg)`;
    sec1.style.transform = `rotate(${secR + 180}deg)`;
    

}

setInterval(displayTime, 500);