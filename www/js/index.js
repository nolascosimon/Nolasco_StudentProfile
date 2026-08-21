document.addEventListener("deviceready", setup);
document.addEventListener("DOMContentLoaded", setup);

let ready = false;

function setup() {
    if (ready) return;
    ready = true;

    document.querySelectorAll(".nav-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            showSection(button.dataset.target);
        });
    });

    document.getElementById("year").textContent = new Date().getFullYear();
}

function showSection(id) {
    document.querySelectorAll(".section").forEach(function (section) {
        section.classList.toggle("is-visible", section.id === id);
    });

    document.querySelectorAll(".nav-btn").forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.target === id);
    });
}
