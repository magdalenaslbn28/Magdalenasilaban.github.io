let currentBtn = null;

function startTime() {
    const clock = document.getElementById('clock');
    // Cek dulu: kalau elemen 'clock' ada, baru jalankan
    if (clock) {
        const today = new Date();
        let h = today.getHours(), m = today.getMinutes(), s = today.getSeconds();
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        clock.innerHTML = h + ":" + m + ":" + s;
    }
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

function toggleNav() {
    let nav = document.getElementById("sideNav");
    if (nav) {
        nav.style.width = nav.style.width === "300px" ? "0" : "300px";
    }
}

// FUNGSI PLAY/PAUSE DENGAN GANTI TULISAN
function playTrack(fileLagu, btn) {
    const audio = document.getElementById("spotifyAudio");
    if (!audio) return;

    if (audio.src.includes(fileLagu)) {
        if (audio.paused) {
            audio.play();
            btn.innerText = "PAUSE";
        } else {
            audio.pause();
            btn.innerText = "PLAY";
        }
    } else {
        // Reset tombol lagu sebelumnya kalau ada
        if (currentBtn) currentBtn.innerText = "PLAY";
        
        audio.src = fileLagu;
        audio.play();
        btn.innerText = "PAUSE";
        currentBtn = btn;
    }
}

function showPhoto(url) {
    const modal = document.getElementById("photoModal");
    const img = document.getElementById("imgTarget");
    if (modal && img) {
        modal.style.display = "flex";
        img.src = url;
    }
}

function closeModal() {
    const modal = document.getElementById("photoModal");
    if (modal) modal.style.display = "none";
}

window.addEventListener("scroll", reveal);
window.onload = () => { 
    startTime(); 
    reveal(); 
};