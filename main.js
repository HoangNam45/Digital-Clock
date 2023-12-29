
var showCurrentTime = function (){
    var clok = document.querySelector('#clock');
    var dae = document.querySelector('#date');
    var sec = document.querySelector('#sec');
    
    var currentTime= new Date();
    var year = currentTime.getFullYear(); 
    var month = currentTime.getMonth(); 
    var day = currentTime.getDate(); 
    var hours = currentTime.getHours(); 
    var minutes = currentTime.getMinutes(); 
    var seconds = currentTime.getSeconds(); 
    var today= currentTime.getDay();
    //Set hours
    if (hours < 10){
        hours='0'+hours;
    }
    //Set minutes
    if (minutes<10){
        minutes = "0" + minutes;
    }
    //Set seconds
    if (seconds<10){
        seconds = "0" + seconds;
    }
    //Set Month
    var monthsOfyear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    //Set Day
    var daysOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    var clockTime = hours + ' : ' + minutes;
    clok.innerText = clockTime;
    var clockDate = daysOfweek[today] + ' - '+ monthsOfyear[month] + ' ' + day;
    dae.innerText = clockDate;
    var clockSecond = seconds;
    sec.innerText = clockSecond;
}
setInterval(showCurrentTime,1000);
showCurrentTime();

