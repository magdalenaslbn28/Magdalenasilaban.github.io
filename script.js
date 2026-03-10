function startTime() {
    const today = new Date();
    let h = today.getHours(), m = today.getMinutes(), s = today.getSeconds();
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}

window.addEventListener("scroll", reveal);
window.onload = () => { startTime(); reveal(); };

function toggleNav() {
    let nav = document.getElementById("sideNav");
    nav.style.width = nav.style.width === "300px" ? "0" : "300px";
}

function playMusic() { document.getElementById("myAudio").play(); }
function pauseMusic() { document.getElementById("myAudio").pause(); }

function showPhoto(url) {
    document.getElementById("photoModal").style.display = "flex";
    document.getElementById("imgTarget").src = url;
}
function closeModal() { document.getElementById("photoModal").style.display = "none"; }