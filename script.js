function toggleSong() {
    document.getElementById("songBox").classList.toggle("hidden");
}

function toggleQuotes() {
    document.getElementById("quotesBox").classList.toggle("hidden");
}

function playPause() {
    let song = document.getElementById("song");

    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}