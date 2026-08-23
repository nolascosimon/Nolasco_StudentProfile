document.getElementById("aboutBtn").onclick = function () {
    showSection("about");
};

document.getElementById("skillsBtn").onclick = function () {
    showSection("skills");
};

function showSection(name) {
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById(name).style.display = "block";

    document.getElementById("aboutBtn").className = "menu-button";
    document.getElementById("skillsBtn").className = "menu-button";
    document.getElementById(name + "Btn").className = "menu-button active";
}

document.getElementById("year").textContent = new Date().getFullYear();
