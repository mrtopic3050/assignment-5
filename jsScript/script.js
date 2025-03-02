// Changing bg-color randomly
function changeBgColor() {
    const colors = ["bg-red-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-gray-100"];
    const body = document.body;
    body.classList.remove("bg-blue-100", "bg-red-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-gray-100");

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.classList.add(randomColor);
}

//Disable Button After Click
let completeButton = document.getElementsByClassName('complete-btn');

for (let i = 0; i < completeButton.length; i++) {
    completeButton[i].addEventListener('click', function () {
        this.style.backgroundColor = "gray";

        alert('Board Updated Successfully');

        // const task = document.getElementById('task-assigned').value;
        // const convertedTask = parseInt(task);
        const assignedTask = document.getElementById('task-assigned').innerText;
        // const ConvertedAssignedTask = parseInt(assignedTask);

        const totalTask = document.getElementById('total-task-done').innerText;
        const convertedTotalTask = parseInt(totalTask);
        if (completeButton !== 0) {
            const sum = assignedTask - 1;
            const taskDone = convertedTotalTask + 1;

            document.getElementById('task-assigned').innerText = sum;
            document.getElementById('total-task-done').innerText = taskDone;
            if(sum === 0){
                alert('Congrats!! you Have Completed All The Current Tasks');
            }
        }
        else {
            alert('No Task Available!');
        }




    });
    
    
    

}

//Activity Log

document.addEventListener("DOMContentLoaded", function () {
    // Select all "Completed" buttons
    const buttons = document.querySelectorAll(".complete-btn");
    const activityLogContainer = document.querySelector(".messege-tiles");
    activityLogContainer.innerHTML = ""; 

    buttons.forEach((button) => {
        button.addEventListener("click", function () {

            // Getting the task name
            const CurrentTaskName = button.closest(".card-body").querySelector("h2").innerText;

            // Getting current time
            const currentTime = new Date().toLocaleTimeString();

            // Create a new log entry
            const activityLogEntry = document.createElement("div");
            activityLogEntry.classList.add("w-[318px]", "h-[68px]", "rounded-md", "p-2", "bg-[#F4F7FF]", "mt-2");
            activityLogEntry.innerHTML = `<p>You have completed the task <b>${CurrentTaskName}</b> at <b>${currentTime}</b></p>`;

            // Append to activity log container
            activityLogContainer.appendChild(activityLogEntry);
        });
    });
    
    //Clear history
    document.getElementById('clear-history')
    .addEventListener('click', function(){
        activityLogContainer.innerHTML = "";
    });
});

//Date and Time 

document.addEventListener('DOMContentLoaded', function () {
    const dayElement = document.querySelector('.date-container p:first-child');
    const fullDateElement = document.querySelector('.date-container p:last-child');

    const optionsDay = { weekday: "short" };
    const optionsDate = { month: "short", day: "numeric", year: "numeric" };

    const today = new Date();
    const dayText = today.toLocaleDateString("en-US", optionsDay);
    const dateText = today.toLocaleDateString("en-US", optionsDate);
  
    // format date in the HTML
    dayElement.textContent = `${dayText},`;
    fullDateElement.textContent = dateText;
})


