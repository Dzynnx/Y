document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const playMusicBtn = document.getElementById('play-music-btn');
  
    playMusicBtn.addEventListener('click', () => {
      if (music.paused) {
        music.play();
        playMusicBtn.textContent = '暂停音乐';
      } else {
        music.pause();
        playMusicBtn.textContent = '播放音乐';
      }
    });
  });
  