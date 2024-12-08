document.addEventListener('DOMContentLoaded', () => {
  const triggerButton = document.getElementById('trigger-button');
  const fireworksContainer = document.getElementById('fireworks-container');

  // 点击按钮时触发烟花
  triggerButton.addEventListener('click', () => {
    if (fireworksContainer) {
      const fireworks = new Fireworks.default(fireworksContainer);
      fireworks.start();
    } else {
      console.error('Fireworks container not found!');
    }
  });
});
