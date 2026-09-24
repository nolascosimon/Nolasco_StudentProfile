var PHOTO_STORAGE_KEY = "studentProfilePhoto";

var savedPhoto = localStorage.getItem(PHOTO_STORAGE_KEY);
if (savedPhoto) {
    var headerPhoto = document.querySelector(".header .photo");
    if (headerPhoto) {
        headerPhoto.src = savedPhoto;
    }
}
