/* ============================================================
   Basic Student Profile - ITCC 41 Activity 2
   Demonstrates: variables, functions, events, and the DOM.
   ============================================================ */

// Wait until Cordova has finished loading the device APIs.
document.addEventListener('deviceready', onDeviceReady, false);

// Also run in a normal browser, where 'deviceready' never fires.
document.addEventListener('DOMContentLoaded', onDeviceReady, false);

var started = false;

function onDeviceReady() {
    if (started) { return; }   // only set things up once
    started = true;

    setupNavigation();
    showCurrentYear();
}

/* ------------------------------------------------------------
   THE INTERACTION
   Tapping a navigation button shows that section and hides the
   other one, without reloading the page.
   ------------------------------------------------------------ */
function setupNavigation() {
    var buttons = document.querySelectorAll('.nav-btn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            var targetId = event.currentTarget.getAttribute('data-target');
            showSection(targetId);
        });
    }
}

function showSection(targetId) {
    var sections = document.querySelectorAll('.section');
    var buttons = document.querySelectorAll('.nav-btn');

    // Hide every section, then show only the one that was chosen.
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === targetId) {
            sections[i].classList.add('is-visible');
        } else {
            sections[i].classList.remove('is-visible');
        }
    }

    // Highlight the matching navigation button.
    for (var j = 0; j < buttons.length; j++) {
        if (buttons[j].getAttribute('data-target') === targetId) {
            buttons[j].classList.add('is-active');
        } else {
            buttons[j].classList.remove('is-active');
        }
    }
}

/* ------------------------------------------------------------
   Footer year - always shows the current year automatically.
   ------------------------------------------------------------ */
function showCurrentYear() {
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
}
