let yesScale = 1;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Envelope Interaction
function openEnvelope() {
    document.getElementById('envelope-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
}

// Success Interaction
function handleYes() {
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('success-screen').classList.add('active');
}

// METHOD 1: Growing "Yes" Button (Default)
const noTexts = [
    "Are you sure?", 
    "Really sure?", 
    "Think again!", 
    "Last chance!", 
    "Surely not?", 
    "You might regret this!", 
    "Give it another thought!", 
    "Are you absolutely certain?", 
    "This could be a mistake!", 
    "Have a heart!", 
    "Don't be so cold!", 
    "Change of heart?", 
    "Wouldn't you reconsider?", 
    "Is that your final answer?", 
    "You're breaking my heart ;("
];
let clickCount = 0;

function handleNo() {
    clickCount++;
    // Increase size of Yes button
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Change No button text
    const index = Math.min(clickCount, noTexts.length - 1);
    noBtn.innerText = noTexts[index];
}

/* 
// METHOD 2: Running "No" Button (Alternative)
// To use this, comment out the handleNo function above and uncomment this one:

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
*/