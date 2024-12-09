document.addEventListener('DOMContentLoaded', () => {
  // 获取背景音乐元素
  const music = document.getElementById('background-music');
  
  // 获取“点击进入主页”按钮
  const enterBtn = document.getElementById('enter-btn');

  // 如果在 index.html 中存在 enterBtn，则绑定点击事件
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
    
      if (music) {
        music.play().then(() => {
          console.log('音乐已播放');
          // 延迟1秒后跳转页面，确保音乐开始播放
          setTimeout(() => {
            window.location.href = 'page1.html';
          }, 1);
        }).catch((error) => {
          console.error('播放音乐时出错:', error);
          // 即使播放失败，仍然跳转页面
          window.location.href = 'page1.html';
        });
      } else {
        console.warn('背景音乐元素未找到。');
        // 如果找不到音乐元素，直接跳转页面
        window.location.href = 'page1.html';
      }
    });
  }

  

  // 如果在 page1.html 中存在背景音乐元素，则尝试播放音乐
  if (music && window.location.pathname.endsWith('page1.html')) {
    music.play().then(() => {
      console.log('page1.html 的音乐已播放');
    }).catch((error) => {
      console.error('page1.html 播放音乐时出错:', error);
    });
  }
});


// 随机生成蝴蝶的位置，确保不会超出屏幕
function getRandomPosition() {
  const width = window.innerWidth;  // 获取屏幕宽度
  const height = window.innerHeight;  // 获取屏幕高度
  const randomX = Math.random() * (width - 200);  // 随机水平位置，50是蝴蝶的宽度
  const randomY = Math.random() * (height - 200);  // 随机垂直位置，50是蝴蝶的高度

  return { x: randomX, y: randomY };
}

// 将蝴蝶放置在随机位置
function setButterflyPosition() {
  const butterfly = document.querySelector('.butterfly');
  const { x, y } = getRandomPosition();
  butterfly.style.left = `${x}px`;
  butterfly.style.top = `${y}px`;
}

// 初始随机位置设置
setButterflyPosition();

// 每5秒重新设置蝴蝶的位置
setInterval(setButterflyPosition, 1000);


/*烟花*/

// 获取背景音乐元素
const music = document.getElementById('background-music');

// 获取按钮
const triggerButton = document.getElementById('trigger-button');

// 监听按钮点击事件
triggerButton.addEventListener('click', () => {
  // 播放背景音乐
  if (music) {
    music.src = '/Y/Audio/yanhua.mp3'; // 设置音乐文件路径
    music.play().then(() => {
      console.log('音乐已开始播放');
    }).catch((error) => {
      console.error('播放音乐时出错:', error);
    });
  } else {
    console.warn('背景音乐元素未找到。');
  }

  // 初始化和开始烟花效果
  const fireworksContainer = document.getElementById('fireworks-container');
  if (fireworksContainer) {
    const fireworks = new Fireworks.default(fireworksContainer);
    fireworks.start();
  } else {
    console.error('Fireworks container not found!');
  }
});





