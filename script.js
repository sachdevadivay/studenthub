        // Basic markdown-like code block formatting for the bot
        let formattedText = text;
        if (text.includes("```")) {
            // Replaces markdown ticks with styled HTML <pre> blocks
            formattedText = text.replace(/
http://googleusercontent.com/immersive_entry_chip/0

### Here is the full, perfectly clean `script.js` file

To make sure you don't have any hidden errors, copy and paste this entire block over your `script.js` file:

```javascript
/* =========================================
   PDF VIEWER
   ========================================= */
function openPDF(file) {
    document.getElementById("pdfViewer").style.display = "block";
    document.getElementById("pdfFrame").src = file;
    
    // Smooth scroll down to the PDF viewer
    window.scrollTo({
        top: document.getElementById("pdfViewer").offsetTop,
        behavior: "smooth"
    });
}

/* =========================================
   ABOUT PANEL FUNCTIONS
   ========================================= */
function openAbout() {
    document.getElementById("aboutPanel").style.right = "0";
}

function closeAbout() {
    document.getElementById("aboutPanel").style.right = "-400px";
}

/* =========================================
   HAMBURGER MENU & DROPDOWNS
   ========================================= */
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function toggleSubMenu(menuId, event) {
    // Prevent the page from jumping to the top when a folder is clicked
    event.preventDefault(); 
    const submenu = document.getElementById(menuId);
    submenu.classList.toggle("active");
}

/* =========================================
   INTEGRATED NOTEVERSE COPILOT CHAT
   ========================================= */
function handleInlineChat(event) {
    if (event.key === "Enter") {
        sendInlineMessage();
    }
}

function sendInlineMessage() {
    const inputField = document.getElementById("inlineChatInput");
    const message = inputField.value.trim();
    
    if (message === "") return;

    // 1. Display User Message securely
    addInlineChatMessage(message, "user");
    inputField.value = ""; // Clear input

    // 2. Simple Bot Logic (Mocking Copilot response)
    const lowerMsg = message.toLowerCase();
    
    // Slight delay (600ms) to simulate the bot "typing" or thinking
    setTimeout(() => {
        let reply = "I'm still learning! Ask me about your subjects, notes, or where to find PYQs.";
        
        // Keyword matching for responses
        if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
            reply = "Hello! Ready to dive into your studies? Ask me to find a syllabus or summarize a topic.";
        } else if (lowerMsg.includes("notes") || lowerMsg.includes("dsa") || lowerMsg.includes("physics")) {
            reply = "You can access all subject notes by opening the menu (☰) in the top left and selecting your Semester under the 'Notes' tab.";
        } else if (lowerMsg.includes("pyq") || lowerMsg.includes("previous")) {
            reply = "Previous Year Questions are organized by semester. Open the menu and click 'PYQs' to find them!";
        } else if (lowerMsg.includes("code") || lowerMsg.includes("github")) {
            reply = "```javascript\n// Welcome to NoteVerse Copilot!\nfunction aceExam() {\n  return 'Study hard and check your PYQs!';\n}\n```";
        }
        
        addInlineChatMessage(reply, "bot");
    }, 600); 
}

function addInlineChatMessage(text, sender) {
    const chatHistory = document.getElementById("inlineChatHistory");
    const msgDiv = document.createElement("div");
    
    if (sender === "user") {
        msgDiv.className = "user-msg-inline";
        // Create inner HTML structure securely
        msgDiv.innerHTML = `<strong>You</strong><p id="temp-user-text"></p>`;
        chatHistory.appendChild(msgDiv);
        
        // Inject user text securely to prevent XSS
        document.getElementById("temp-user-text").textContent = text;
        document.getElementById("temp-user-text").removeAttribute("id");
    } else {
        msgDiv.className = "bot-msg-inline";
        
        // Basic markdown-like code block formatting for the bot
        let formattedText = text;
        if (text.includes("```")) {
            // Replaces markdown ticks with styled HTML <pre> blocks
            formattedText = text.replace(/
http://googleusercontent.com/immersive_entry_chip/1

Once you paste this in, your website should load perfectly without any JavaScript errors! Are you ready to test it out in your browser?
   
