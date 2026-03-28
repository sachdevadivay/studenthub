/* =========================================
   SIDEBAR DASHBOARD LOGIC
   ========================================= */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

/* =========================================
   SUBMENU (NOTES & PYQs) LOGIC
   ========================================= */
function toggleSubMenu(id, event) {
    event.preventDefault(); // Prevents page from jumping to top

    // Close any other open submenus first
    document.querySelectorAll(".submenu").forEach(menu => {
        if (menu.id !== id) menu.classList.remove("active");
    });

    // Toggle the one you actually clicked
    document.getElementById(id).classList.toggle("active");
}

/* =========================================
   ABOUT PANEL LOGIC
   ========================================= */
function openAbout() {
    document.getElementById("aboutPanel").style.right = "0";
}

function closeAbout() {
    document.getElementById("aboutPanel").style.right = "-400px"; 
}

/* =========================================
   PDF VIEWER LOGIC
   ========================================= */
function openPDF(file) {
    const viewer = document.getElementById("pdfViewer");
    viewer.style.display = "block";
    document.getElementById("pdfFrame").src = file;
    
    // Smoothly scroll down to the PDF viewer
    window.scrollTo({
        top: viewer.offsetTop - 100,
        behavior: "smooth"
    });
}
