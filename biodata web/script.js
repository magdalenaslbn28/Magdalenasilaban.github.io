// ================= MUSIC =================
function toggleMusic(){
  const song = document.getElementById("song");
  const title = document.getElementById("songTitle");
  const label = document.getElementById("musicLabel");

  if(song.paused){
    song.play();
    title.classList.remove("hidden");
    label.innerText = "⏸ Pause";
  } else {
    song.pause();
    title.classList.add("hidden");
    label.innerText = "🎵 Favorite Song";
  }
}

// ================= CLICK SOUND =================
function playClick(){
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}

// ================= TOGGLE CONTENT =================
function toggleContent(id){
  const content = document.getElementById(id);

  if(content.style.display === "block"){
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

// ================= PHOTO POPUP + SOUND =================
function openPhoto(){
  document.getElementById("popup").style.display = "flex";

  const sound = document.getElementById("photoSound");
  sound.currentTime = 0;
  sound.play();
}

function closePhoto(){
  document.getElementById("popup").style.display = "none";
}
