function startTime() {
    const today = new Date();
    let h = today.getHours(); let m = today.getMinutes(); let s = today.getSeconds();
    m = checkTime(m); s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) { if (i < 10) {i = "0" + i}; return i; }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) { reveals[i].classList.add("active"); }
    }
}
window.addEventListener("scroll", reveal);
window.onload = function() { startTime(); reveal(); };

function toggleNav() {
    const nav = document.getElementById("sideNav");
    nav.style.width = (nav.style.width === "300px") ? "0" : "300px";
}

const audio = document.getElementById("myAudio");
function playMusic() { audio.play(); }
function pauseMusic() { audio.pause(); }

function showPhoto(url) {
    const modal = document.getElementById("photoModal");
    const modalImg = document.getElementById("imgTarget");
    modal.style.display = "flex";
    modalImg.src = url;
}
function closeModal() { document.getElementById("photoModal").style.display = "none"; }