
document.addEventListener('DOMContentLoaded', () => {
  const userChoices = document.querySelectorAll('.user-choices .image');
  const userScoreEl = document.getElementById('your-score');
  const compScoreEl = document.getElementById('comp-score');
  const loseImg = document.getElementById('lose');
  const winImg = document.getElementById('win');
  const drawImg = document.getElementById('draw');
  const popupCard = document.getElementById('popupCard');
  const showPopupBtn = document.getElementById('showPopupBtn');
  const closeHappyBtn = document.getElementById('happyCard');
  const closeSadBtn = document.getElementById('sadCard');

  let userScore = 0;
  let compScore = 0;
  
  function InputUserChoice(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const compChoice = choices[Math.floor(Math.random() * choices.length)];

      if (userChoice === compChoice) {
          displayResult("tie");
      } else if (
          (userChoice === 'rock' && compChoice === 'scissors') ||
          (userChoice === 'paper' && compChoice === 'rock') ||
          (userChoice === 'scissors' && compChoice === 'paper')
      ) {
          userScore++;
          userScoreEl.textContent = userScore;
          displayResult("win");
      } else {
          compScore++;
          compScoreEl.textContent = compScore;
          displayResult("lose");
      }
    };
  
  function displayResult(result) {
      winImg.style.display = result === "win" ? 'block' : 'none';
      loseImg.style.display = result === "lose" ? 'block' : 'none';
      drawImg.style.display = result === "tie" ? 'block' : 'none';
    
      setTimeout(() => {
          winImg.style.display = 'none';
          loseImg.style.display = 'none';
          drawImg.style.display = 'none';
      }, 1000);
  }

  function resetGame() {
      userScore = 0;
      compScore = 0;
      userScoreEl.textContent = userScore;
      compScoreEl.textContent = compScore;
      popupCard.style.display = 'none';
      document.getElementById('happyScore').textContent = '';
        document.getElementById('sadScore').textContent = ''; 
  }

  userChoices.forEach(img => {
      img.addEventListener('click', () => {
          const choice = img.id;
          img.style.transform = 'scale(0.8)';

          setTimeout(() => {
            img.style.transform = 'scale(1)';
          }, 150); 
          InputUserChoice(choice);
      });
  });

  const happyCard = document.getElementById('happyCard');
  const sadCard = document.getElementById('sadCard');
  showPopupBtn.addEventListener('click', () => {
    popupCard.style.display = 'block';

    if (userScore > compScore) {
        happyCard.style.display = 'block';
        sadCard.style.display = 'none';
        document.getElementById('happyScore').textContent = ` ${userScore} : ${compScore}`;
    } else {
        happyCard.style.display = 'none';
        sadCard.style.display = 'block';
        document.getElementById('sadScore').textContent = ` ${userScore} : ${compScore}`;
    } 
});
  closeHappyBtn.addEventListener('click', resetGame);
  closeSadBtn.addEventListener('click', resetGame);
});
document.addEventListener('click', (event) => {
  if (!popupCard.contains(event.target)) {
      resetGame();
  }
});