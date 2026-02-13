script.js
const messages = [
  "You make my heart smile ❤️",
  "Every day with you is special 💕",
  "You're my favorite person 💘",
  "Love you forever 💞",
  "You are my happiness ✨"
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[randomIndex];
}
