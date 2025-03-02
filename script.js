const colorChange = document.getElementById("colorchange-btn");

colorChange.addEventListener("click", function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
})





const fixedMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const dayList= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let d = new Date()
let year = d.getFullYear()
let month =  fixedMonth[d.getMonth()]
let date =  d.getDate()
let day =  dayList[d.getDay()]


let domDay = document.getElementById("day");
domDay.innerHTML = day.slice(0,3)

let domDate = document.getElementById("date");
domDate.innerHTML =   `${month.slice(0,3)} ${date} ${year}`


console.log(`${year}, ${month}, ${date}, ${day}`);






