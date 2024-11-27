document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const playButton = document.getElementById('enterButton');
  
  // 判断本地存储是否有播放状态，若有，直接播放音乐
  if(localStorage.getItem('isMusicPlaying') === 'true') {
    music.play();
  }

  playButton.addEventListener('click', () => {
    // 播放背景音乐
    music.play();
    // 标记背景音乐已播放
    localStorage.setItem('isMusicPlaying', 'true');
    
    // 给音乐播放几秒钟后再跳转到第二个界面
    setTimeout(() => {
      // 跳转到第二个页面
      window.location.href = 'page2.html';
    }, 2000); // 延迟2秒后跳转
  });
});
