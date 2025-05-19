
  function openLetter() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }

  function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
