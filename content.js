// Check if decision has been made already to prevent showing modal again
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
    content.style.background = "white";
    content.style.padding = "40px";  // Increased padding for a bigger modal
    content.style.textAlign = "center";
    content.style.borderRadius = "12px";  // Slightly rounded corners
    content.style.maxWidth = "80%";  // Limit the width
    content.style.fontSize = "24px";  // Increase the text size
  
    content.innerHTML = `
      <p style="font-size: 28px; font-weight: bold;">Are you sure you want to dive into distractions right now?</p>
        <p style="font-size: 20px;">Think about your goals and what really matters today. Choose wisely!</p>
      
      <button id="yesButton" style="margin-right: 20px; font-size: 18px; padding: 10px 20px;">Distraction</button>

      <button id="noButton" style="font-size: 18px; padding: 10px 20px;">Focus</button>
    `;
    modal.appendChild(content);
    document.body.appendChild(modal);
  
    // Block further interaction until the decision is made
    window.decisionMade = true;
  
    // Event listener for "Yes" button
    document.getElementById("yesButton").addEventListener("click", () => {
      // Send message to background script to allow the site
      chrome.runtime.sendMessage({ action: "allowSite" });
  
      // Close the modal and allow the site to load without a reload
      modal.remove();
    });
  
    // Event listener for "No" button
    document.getElementById("noButton").addEventListener("click", () => {
      // Change the modal content to show motivational message and link
      content.innerHTML = `
        <p style="font-size: 28px; font-weight: bold;">Great decision! Take a quick break and check your To-Do list. You're on track to crush your goals!</p>
        <p style="font-size: 20px;"><a href="https://www.notion.so/anasahmed1/Today-s-task-cfc31de57535417b81c1b708b2f26da3" target="_blank">Click here to check your To-Do list</a></p>
      `;
    });
  } else {
    // If decision has been made, do nothing (prevents infinite loops)
    console.log('Decision already made. No prompt will appear.');
  }
