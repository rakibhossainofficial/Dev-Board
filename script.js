const taskHistory = [];

// random color change
const colorChange = document.getElementById("colorchange-btn");

colorChange.addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
});

// Current Date and day

const fixedMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let d = new Date();
let year = d.getFullYear();
let month = fixedMonth[d.getMonth()];
let date = d.getDate();
let day = dayList[d.getDay()];
let time = d.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

let domDay = document.getElementById("day");
domDay.innerHTML = day.slice(0, 3);

let domDate = document.getElementById("date");
domDate.innerHTML = `${month.slice(0, 3)} ${date} ${year}`;

// blog
document.getElementById("blog-in").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./blog.html";
});

// card

let completedTask = 23;
const completedTaskDom = document.getElementById("completed-task");
completedTaskDom.innerHTML = completedTask;

let totalTask = 6;
const totalTaskDom = document.getElementById("total-task");
totalTaskDom.innerHTML = `0${totalTask}`;

function taskComplete(id) {
  let parentElement = document.getElementById("aside")
  parentElement.innerHTML = "";
  const domCard = document.getElementById(id);
  const cardTitle = domCard.getElementsByTagName("h3")[0].innerText;
  const cardButton = domCard.getElementsByTagName("button")[0];
  cardButton.setAttribute("disabled", true);

  const logText = `You have Complete The Task ${cardTitle} at ${time}`;
  taskHistory.push(logText);

  console.log(taskHistory);

  totalTask -= 1;
  totalTaskDom.innerHTML = `0${totalTask}`;
  alert("Board Updated Successfully");

  completedTask += 1;
  completedTaskDom.innerHTML = completedTask;

  if (totalTask === 0) {
    alert("Congrates!! You Have Complete All The Task");
  }



  for(task of taskHistory){

    let history = document.createElement(`p`);
    history.innerHTML = task;
    history.classList.add("history-text");
    parentElement.appendChild(history)

  }
}


