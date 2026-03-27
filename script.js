/* MENU */
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

/* SUBMENU */
function toggleSubMenu(id, event) {
    event.preventDefault();
    event.stopPropagation();

    document.querySelectorAll(".submenu").forEach(menu => {
        if (menu.id !== id) menu.classList.remove("active");
    });

    document.getElementById(id).classList.toggle("active");
}

/* CLICK OUTSIDE CLOSE MENU */
document.addEventListener("click", function(e) {
    const nav = document.getElementById("navLinks");
    const icon = document.querySelector(".menu-icon");

    if (!nav.contains(e.target) && !icon.contains(e.target)) {
        nav.classList.remove("active");
    }
});

/* ABOUT PANEL */
function openAbout() {
    document.getElementById("aboutPanel").style.right = "0";
}

function closeAbout() {
    document.getElementById("aboutPanel").style.right = "-300px";
}

/* PDF VIEW */
function openPDF(file) {
    const viewer = document.getElementById("pdfViewer");
    viewer.style.display = "block";
    document.getElementById("pdfFrame").src = file;
}

/* MODAL */
function openUploadModal(type, event) {
    event.stopPropagation();
    document.getElementById("uploadTitle").innerText = "Upload " + type;
    document.getElementById("uploadModal").style.display = "flex";
}

function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

/* CLOSE MODAL OUTSIDE */
window.onclick = function(e) {
    const modal = document.getElementById("uploadModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

/* FAKE UPLOAD */
function simulateUpload() {
    alert("Uploaded!");
    closeUploadModal();
}
