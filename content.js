// Check if decision has been made already to prevent showing the modal again
if (!window.decisionMade) {
  // Create the modal that blocks the site
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";

  // Modal content
  const content = document.createElement("div");
  content.style.backgroundColor = "white";
  content.style.padding = "30px";
  content.style.textAlign = "center";
  content.style.borderRadius = "8px";
  content.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
  content.style.color = "#000000"; // Set default text color for content
  
  content.innerHTML = `
    <p style="font-size: 28px; font-weight: bold; color: #000000">Are you sure you want to dive into distractions right now?</p>

    <p style="font-size: 28px; font-weight: bold; color: #000000">Think about your goals and what really matters today. Choose wisely!</p>

    <button id="distractionButton" style="margin: 20px; padding: 10px 20px; font-size: 20px; background-color: green; color: white; border: none; border-radius: 5px;">Focus</button>

    <button id="focusButton" style="margin: 20px; padding: 10px 20px; font-size: 20px; background-color: red; color: white; border: none; border-radius: 5px;">Distraction</button>
  `;
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Block further interaction until the decision is made
  window.decisionMade = true;

  // Event listener for "Focus" button
  document.getElementById("focusButton").addEventListener("click", () => {
    // Allow the site
    modal.remove();
    chrome.runtime.sendMessage({ action: "allowSite" });
  });

  // Event listener for "Distraction" button
  document.getElementById("distractionButton").addEventListener("click", () => {
    // Change the modal content to motivational message and link
    content.innerHTML = `
      <p style="font-size: 24px; font-weight: bold; color: #000000;">Great decision! Stay focused!</p>
      <p style="font-size: 20px; color: #000000;">Take a quick break and check your To-Do list for today.</p>
      <p><a href="https://www.notion.so/anasahmed1/Today-s-task-cfc31de57535417b81c1b708b2f26da3" target="_blank" style="font-size: 18px; color: blue; text-decoration: underline;">Click here to check your To-Do list</a></p>
    `;
  });
} else {
  console.log("Decision already made. No modal shown.");
}




