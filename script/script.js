const taskButton = document.querySelectorAll(".task-btn");
for (let i = 0; i < taskButton.length; i++) {
  const taskBtn = taskButton[i];
  taskBtn.addEventListener("click", (event) => {
    taskBtn.disabled = true;
    alert("Board Updated Successfully");

    const assignedTask = parseInt(
      document.querySelector("#complete-task").innerText
    );
    const countTask = parseInt(document.querySelector("#count-task").innerText);
    const completeCountTask = countTask - 1;
    const completeAssignedTask = assignedTask + 1;

    document.querySelector("#complete-task").innerText = completeAssignedTask;
    document.querySelector("#count-task").innerText = completeCountTask;

    if (completeCountTask === 0) {
      alert("congrats🎉 You have completed all the tasks!");
    }

    const time = getCurrentTimeAMPM();
    const taskName = event.target.getAttribute("data-task");
    const messageBox = document.querySelector("#messageBox");
    const div = document.createElement("div");
    div.innerHTML = `
    <p class="para-style">You have Completed The Task ${taskName} at ${time}</p>
    `;
    messageBox.appendChild(div);
  });
}

// clear history
document.querySelector("#clear-btn").addEventListener("click", (event) => {
  messageBox.innerHTML = "";
});

document.querySelector("#discover-btn").addEventListener("click", (event) => {
  window.location.href = "blog.html";
});

document.getElementById("date").innerText = getCurrentDateWithDay();
