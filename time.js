console.log("time.js 文件已加载！");

function startCountdown() {
  const timerElement = document.getElementById('countdown-timer');
  if (!timerElement) {
    console.error('未找到 ID 为 countdown-timer 的元素！');
    return;
  }

  const targetYear = 2025; // 设置目标年份
  const newYearTime = new Date(`January 1, ${targetYear} 00:00:00`); // 设置目标时间

  function updateCountdown() {
    const now = new Date(); // 获取当前时间
    const diff = newYearTime - now; // 计算时间差

    if (diff >= 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timerElement.innerText = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    } else {
      timerElement.innerText = "新年快乐鸭！我们还会在一起吗！";
    }
  }

  // 每秒更新一次倒计时
  setInterval(updateCountdown, 1000);
  updateCountdown(); // 初始化调用一次
}

// 确保 DOM 加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startCountdown);
} else {
  startCountdown();
}
