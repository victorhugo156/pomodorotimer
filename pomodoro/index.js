/*
- Create a variable numb to be decremented
- Create a function to decrement the numb
- Establish a set interval to decrement the numb automatically
- Create a function to stop the interval using clearInterval();



let btnStart = document.querySelector('#start');

let countingDownSeconds = 5;
let interval2 = null;

const countingDown = () =>{
    if(countingDownSeconds <= 0){
        emptyInterval();
        return
    }
    countingDownSeconds -= 1;
    console.log(countingDownSeconds);
}

btnStart.addEventListener('click', iniciar)

function iniciar(){
    interval2 = setInterval(countingDown,1000)
}

function emptyInterval(){
    clearInterval(interval2)
    interval2 = null;
}
*/