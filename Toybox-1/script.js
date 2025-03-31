// "Toybox 1" Game — Part of a unified drag-and-drop game
// This is 1 of 4 connected files (HTML / CSS / game.js / script.js)
// Do not break existing desktop layout — goal is to make this mobile-friendly

// Adjust layout for mobile responsiveness
function adjustLayout() {
  const toolbox = document.getElementById('toolbox');
  const gameArea = document.getElementById('game-area');

  if (window.innerWidth <= 768) {
    // Mobile layout adjustments
    toolbox.style.flexDirection = 'row';
    toolbox.style.overflowX = 'scroll';
    toolbox.style.overflowY = 'hidden';
    gameArea.style.marginTop = '20px';
  } else {
    // Revert to desktop layout
    toolbox.style.flexDirection = 'column';
    toolbox.style.overflow = 'visible';
    gameArea.style.marginTop = '0';
  }
}

// Listen for window resize to adjust layout dynamically
window.addEventListener('resize', adjustLayout);

// Initial layout adjustment on page load
adjustLayout();

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Sortable for the toolbox
  const toolbox = document.getElementById('toolbox');
  const gameArea = document.getElementById('game-area');

  // Make toolbox items draggable
  Sortable.create(toolbox, {
    group: 'shared', // Allow dragging between toolbox and game area
    animation: 150,
    ghostClass: 'sortable-ghost', // Class for the dragged item
  });

  // Make game area a drop zone
  Sortable.create(gameArea, {
    group: 'shared', // Same group as toolbox
    animation: 150,
    onAdd: (event) => {
      // Handle drop logic
      const item = event.item;
      console.log(`Item dropped: ${item.id}`);
      checkCompletion();
    },
  });

  document.getElementById('reset-button').addEventListener('click', () => {
    sessionStorage.clear(); // Clear XP tracking
    location.reload(); // Reload the page to reset the game
  });
});

// Check if the game is complete
function checkCompletion() {
  const gameArea = document.getElementById('game-area');
  const items = gameArea.querySelectorAll('img'); // Example: Check for specific items
  if (items.length === 5) { // Adjust condition based on your game logic
    awardXP();
  }
}

function awardXP() {
  const toyboxID = 'toybox-1'; // Unique ID for this Toybox
  const xpKey = `xpAwarded_${toyboxID}`;

  if (!sessionStorage.getItem(xpKey)) {
    // Award XP logic
    console.log('XP awarded!');
    sessionStorage.setItem(xpKey, 'true');
    flashXP(); // Optional: Visual feedback for XP award
  } else {
    console.log('XP already awarded for this session.');
  }
}

function flashXP() {
  const xpCounter = document.getElementById('xp-counter');
  xpCounter.classList.add('xp-flash');
  setTimeout(() => xpCounter.classList.remove('xp-flash'), 400);
}