// Chess.com Ad Script
// This script creates a dynamic and interactive Chess.com advertisement

// Array of popular websites
const popularWebsites = [
    'https://www.youtube.com',
    'https://twitter.com',
    'https://www.facebook.com',
    'https://www.instagram.com',
    'https://www.reddit.com',
    'https://www.wikipedia.org',
    'https://www.amazon.com',
    'https://www.netflix.com',
    'https://www.linkedin.com',
    'https://www.twitch.tv'
  ];
  
  // Function to get a random website from the array
  function getRandomWebsite() {
    return popularWebsites[Math.floor(Math.random() * popularWebsites.length)];
  }
  
  // Function to create a new ad container
  function createAdContainer() {
    const adContainer = document.createElement('div');
    adContainer.style.position = 'fixed';
  
    // Set a random position on the screen
    const randomTop = Math.random() * (window.innerHeight - 200);
    const randomLeft = Math.random() * (window.innerWidth - 300);
    adContainer.style.top = `${randomTop}px`;
    adContainer.style.left = `${randomLeft}px`;
  
    adContainer.style.width = '300px';
    adContainer.style.height = '200px';
    adContainer.style.backgroundColor = '#f4f4f4';
    adContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    adContainer.style.borderRadius = '10px';
    adContainer.style.padding = '15px';
    adContainer.style.fontFamily = 'Arial, sans-serif';
    adContainer.style.zIndex = '1000';
    adContainer.style.transition = 'transform 0.3s ease, width 0.3s ease, height 0.3s ease';
    adContainer.style.transform = 'translateY(0)';
  
    document.body.appendChild(adContainer);
  
    let closeClickCount = 0;
  
    // Add a close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '\u2715';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.style.color = '#888';
    closeButton.onclick = () => {
      closeClickCount++;
  
      // Open a random popular website
      window.open(getRandomWebsite(), '_blank');
  
      adContainer.style.width = `${300 + closeClickCount * 50}px`;
      adContainer.style.height = `${200 + closeClickCount * 30}px`;
      adContainer.style.backgroundColor = '#ffe6e6';
  
      const aggressiveMessage = document.createElement('p');
      aggressiveMessage.textContent = `Don't leave! Play chess now at Chess.com! (${closeClickCount})`;
      aggressiveMessage.style.fontSize = '16px';
      aggressiveMessage.style.color = '#d9534f';
      aggressiveMessage.style.fontWeight = 'bold';
      aggressiveMessage.style.marginTop = '10px';
      adContainer.appendChild(aggressiveMessage);
  
      createAdContainer(); // Open a new ad every time the close button is clicked
    };
    adContainer.appendChild(closeButton);
  
    // Add content to the ad
    const adTitle = document.createElement('h3');
    adTitle.textContent = 'Play Chess Anytime!';
    adTitle.style.margin = '0 0 10px 0';
    adTitle.style.color = '#333';
    adContainer.appendChild(adTitle);
  
    const adDescription = document.createElement('p');
    adDescription.textContent = 'Join millions of players on Chess.com and improve your skills. Challenge friends, solve puzzles, and watch lessons from grandmasters!';
    adDescription.style.fontSize = '14px';
    adDescription.style.color = '#555';
    adContainer.appendChild(adDescription);
  
    const playButton = document.createElement('a');
    playButton.textContent = 'Play Now';
    playButton.href = 'https://www.chess.com';
    playButton.target = '_blank';
    playButton.style.display = 'inline-block';
    playButton.style.marginTop = '10px';
    playButton.style.padding = '10px 20px';
    playButton.style.backgroundColor = '#0072f5';
    playButton.style.color = '#fff';
    playButton.style.textDecoration = 'none';
    playButton.style.borderRadius = '5px';
    playButton.style.fontSize = '14px';
    playButton.style.fontWeight = 'bold';
    playButton.style.transition = 'background-color 0.3s';
    playButton.onmouseover = () => (playButton.style.backgroundColor = '#005bb5');
    playButton.onmouseout = () => (playButton.style.backgroundColor = '#0072f5');
    adContainer.appendChild(playButton);
  
    // Add animation for attention
    setTimeout(() => {
      adContainer.style.transform = 'translateY(-10px)';
      setTimeout(() => (adContainer.style.transform = 'translateY(0)'), 300);
    }, 1000);
  }
  
  // Create the first ad
  createAdContainer();
  