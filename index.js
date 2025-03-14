const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//Today
  let today = new Date();
  let monthIndex = today.getMonth();  // Store numerical month index (0-11)
  let month= months[monthIndex];// Get month name from array
  let currentDate = today.getDate();
  let year = today.getFullYear();//year
  let dayOfWeek = days[today.getDay()]; //day of the week

//Display current month and todays date
  document.getElementById("month").textContent = `${month}, ${year}`;
  document.getElementById("today" ).textContent = `Today is:  ${dayOfWeek} ${month} ${currentDate} ${year}`;


function generateCalendar(monthIndex){
  let ulDays = document.getElementById("days");
  ulDays.innerHTML = "";
  let numOfDays = new Date(year, monthIndex + 1, 0).getDate(); //the number of days in any month.
   // Get first day of the month=6 or Saturday
   let firstDay = (new Date(year, monthIndex, 1).getDay() + 6) % 7;//actually 5 sun0,and sat 5
   
   
   //add empty li to align first date
  for(let i=0;i<firstDay;i++){//add empty li to 4 places before first date
    let emptyLi= document.createElement("li");
    emptyLi.classList.add("empty");
    ulDays.appendChild(emptyLi);
  }
   //create calendar with number of days
   for (let i = 1; i <= numOfDays; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    li.classList.add("day");
    ulDays.appendChild(li);
      if(i===currentDate && monthIndex===today.getMonth() && year===today.getFullYear()){
        li.classList.add("active");
      }
  }
  
} 
generateCalendar(monthIndex);  
function prevMonth(){
  monthIndex--;
  if(monthIndex<0) {
    monthIndex=months.length-1;
    year--;
  }
    document.getElementById("month").textContent = `${months[monthIndex]}, ${year}`;
    generateCalendar(monthIndex); 
  }
function nextMonth(){
  monthIndex++;
  if(monthIndex>months.length-1) {
    monthIndex=0;
    year++;
  }
  document.getElementById("month").textContent = `${months[monthIndex]}, ${year}`;
  generateCalendar(monthIndex);
}
