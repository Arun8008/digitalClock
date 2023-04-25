let dateView = document.getElementById('date');
let monthView = document.getElementById('month');
let yearView = document.getElementById('year')


let date = new Date();
let todayDate = date.getDate();
var todayMonth = date.getMonth() + 1;
todayMonth = todayMonth < 10 ? '0'+todayMonth : todayMonth;
let todayYear = date.getFullYear();
 dateView.innerText = todayDate;
 monthView.innerText = todayMonth;
 yearView.innerText = todayYear;

 let hours = document.getElementById("hr") 
 let mini = document.getElementById('min')
 let sec = document.getElementById('sec')



function set(){
  let currentTime = new Date()
current = currentTime.getHours()
minitue = currentTime.getMinutes()
second = currentTime.getSeconds()
minitue = minitue < 10 ? '0'+minitue : minitue;
second = second < 10 ? '0'+second : second;
  hours.innerText = current;
  mini.innerText = minitue;
  sec.innerText = second;
}
setInterval(set, 1000)
                                
let currentDay = date.getDay();
let currentHour = date.getHours();

let sunday = document.getElementById('sun')
let monday = document.getElementById('mon')
let tuesday = document.getElementById('tue')
let wednesday = document.getElementById('wed')
let thursday = document.getElementById('thu')
let friday = document.getElementById('fri')
let saturday = document.getElementById('sat')
let am = document.getElementById('am')
let pm = document.getElementById('pm')



if(currentHour< 12){
    // currentHour=12;
    am.setAttribute('checked', 'checked');
}
else{
    pm.setAttribute('checked', 'checked');
    // currentHour+=12 ;
}


switch(currentDay){
    case 0:
        sunday.setAttribute('checked', 'checked');
        break;
    case 1:
        monday.setAttribute('checked', 'checked');
        break;
    case 2:
        tuesday.setAttribute('checked', 'checked');
        break;
    case 3:
        wednesday.setAttribute('checked', 'checked');
        break;
    case 4:
        thursday.setAttribute('checked', 'checked');
        break;
    case 5:
        friday.setAttribute('checked', 'checked');
        break;
    case 6:
        saturday.setAttribute('checked', 'checked'); 
        break;
}