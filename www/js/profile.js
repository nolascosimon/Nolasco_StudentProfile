var STORAGE_KEY = "studentProfileData";

var defaultProfile = {
    fullName: "Simon Lucas Mari B. Nolasco",
    course: "BS Information Technology",
    yearLevel: "3rd Year",
    aboutMe: "I am a 3rd year Information Technology student who enjoys turning ideas into working software, from small web apps to mobile apps built with Apache Cordova.",
    skills: "HTML & CSS, JavaScript, PHP & MySQL, Python, Java"
};

function loadProfile() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        return JSON.parse(saved);
    }
    return defaultProfile;
}

function renderProfile(profile) {
    document.getElementById("viewFullName").textContent = profile.fullName;
    document.getElementById("viewCourse").textContent = profile.course;
    document.getElementById("viewYearLevel").textContent = profile.yearLevel;
    document.getElementById("viewAboutMe").textContent = profile.aboutMe;

    var skillsList = document.getElementById("viewSkills");
    skillsList.innerHTML = "";
    profile.skills.split(",").forEach(function (rawSkill) {
        var skill = rawSkill.trim();
        if (skill) {
            var item = document.createElement("li");
            item.textContent = skill;
            skillsList.appendChild(item);
        }
    });
}

function fillForm(profile) {
    document.getElementById("fullNameInput").value = profile.fullName;
    document.getElementById("courseInput").value = profile.course;
    document.getElementById("yearLevelInput").value = profile.yearLevel;
    document.getElementById("aboutMeInput").value = profile.aboutMe;
    document.getElementById("skillsInput").value = profile.skills;
}

var currentProfile = loadProfile();
renderProfile(currentProfile);

var profileView = document.getElementById("profileView");
var editForm = document.getElementById("editProfileForm");
var formError = document.getElementById("formError");
var editProfileBtn = document.getElementById("editProfileBtn");
var cancelEditBtn = document.getElementById("cancelEditBtn");

editProfileBtn.addEventListener("click", function () {
    fillForm(currentProfile);
    formError.hidden = true;
    profileView.hidden = true;
    editForm.hidden = false;
});

cancelEditBtn.addEventListener("click", function () {
    editForm.hidden = true;
    formError.hidden = true;
    profileView.hidden = false;
});

editForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("fullNameInput").value.trim();
    var course = document.getElementById("courseInput").value.trim();
    var yearLevel = document.getElementById("yearLevelInput").value.trim();
    var aboutMe = document.getElementById("aboutMeInput").value.trim();
    var skills = document.getElementById("skillsInput").value.trim();

    if (!fullName || !course || !yearLevel || !aboutMe) {
        formError.textContent = "Please complete all required fields.";
        formError.hidden = false;
        return;
    }

    currentProfile = {
        fullName: fullName,
        course: course,
        yearLevel: yearLevel,
        aboutMe: aboutMe,
        skills: skills
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentProfile));
    renderProfile(currentProfile);
    formError.hidden = true;
    editForm.hidden = true;
    profileView.hidden = false;
});
