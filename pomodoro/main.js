/*
- Create a variable numb to be decremented
- Create a function to decrement the numb
- Establish a set interval to decrement the numb automatically
- Create a function to pause the interval using clearInterval();
- Create a functio to Display de timer on screen:
   -format the timer using date() and toLocaleString()


*/

/*
________________________To Do________________________

- I need to implement this function to reload the timer
- I need to check the function displayDigitis() to show the digits0:00
- Start working on the layout
- Implement the option to the user set the timer

*/


let btn_start = document.querySelector("#start span");
let btn_pause = document.getElementById("pause");
let btn_reload = document.getElementById("settings");
let btn_short_break = document.getElementById("short-break")
let digit = document.getElementById("digit");

let digit_in_seconds = 1500;//It respresents 25 min in seconds
let interval = null;


//Function to countdown
const counting_down = () =>{
   start();

   if(digit_in_seconds === 0){
      pause();
      return
   }
   digit_in_seconds -= 1;
   displayTimer();
}


btn_start.addEventListener("click", counting_down);

//Function that set the interval of the countingdow
function start(){
   interval = setInterval(counting_down,1000);
   btn_start.textContent= "pause";
}

function pause(){
   clearInterval(interval);
   interval = null;
   displayTimer();
   btn_start.textContent = "start";
}

function displayTimer(){
   const timer = new Date(digit_in_seconds * 1000);
   let timer_formated = timer.toLocaleString('pt-br',{minute: '2-digit', second: '2-digit'} ) 
   digit.innerHTML = `${timer_formated}`;
}

displayTimer();


/*
displayDigitis(min_digit, sec_digit);

//Function in charge of display the digits of the timer
function displayDigitis(min, sec){
 
   digit.innerHTML = `${min < 10 ? '0':''}${min}:${sec < 10 ? '0':''}${sec}`;

}

//Function in charde of: Start timer; Update Digits & change btn's activity
function start(){
   interval = setInterval(function(){
       //This condition is decreasing the time
       if(sec_digit == 0){
         min_digit -= 1;
         sec_digit = 60;
        }

        sec_digit--;

        displayDigitis(min_digit, sec_digit)
      
      //This part will add and remove the class to hide and show Start and Pause
      btn_pause.classList.remove("pause-actived")
      btn_start.classList.add("pause-actived")

      if(min_digit == 23){
         shortBreak();
        }
        
     },1000)
}

function shortBreak(){
   btn_short_break.style.backgroundColor = "red";
   min_digit = 5;

   displayDigitis(min_digit, sec_digit);

   pause();
}



//Function in charge of : Pause timer
function pause(){

   //This part will stop the interval
   clearInterval(interval)

    //This part will add and remove the class to hide and show Start and Pause
   btn_start.classList.remove("pause-actived")
   btn_pause.classList.add("pause-actived")
   
}

//Function in charge of Reload Timer
function reload(){
   clearTimeout(interval)
   min_digit = 25;
   sec_digit = 0;
   
   btn_pause.classList.add("pause-actived");
   btn_start.classList.remove("pause-actived");

   displayDigitis(min_digit, sec_digit);
  
   console.log(digit)
   
}*/





