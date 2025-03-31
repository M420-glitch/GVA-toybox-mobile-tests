// Adjust layout for mobile responsiveness
function adjustLayout() {
  const toolbox = document.getElementById('toolbox');
  const gameArea = document.getElementById('game-area');

  if (window.innerWidth <= 768) {
    toolbox.style.flexDirection = 'row';
    toolbox.style.overflowX = 'scroll';
    toolbox.style.overflowY = 'hidden';
    toolbox.style.position = 'relative';
    toolbox.style.top = '0';
    toolbox.style.right = '0';

    gameArea.style.width = '100%';
    gameArea.style.height = 'auto';
  } else {
    toolbox.style.flexDirection = 'column';
    toolbox.style.overflow = 'visible';
    toolbox.style.position = 'absolute';
    toolbox.style.top = '100px';
    toolbox.style.right = '40px';

    gameArea.style.width = '600px';
    gameArea.style.height = '500px';
  }
}

window.addEventListener('resize', adjustLayout);
window.addEventListener('DOMContentLoaded', adjustLayout);
