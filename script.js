// Requisito 7
var totalPoints = 0;

function startGame() {
    // Requisito 2
    let trueColor = 'rgb(' + JSON.stringify(parseInt(Math.random() * 255)) + ', ' + JSON.stringify(parseInt(Math.random() * 255)) + ', ' + JSON.stringify(parseInt(Math.random() * 255)) + ')';
    let rgbColor = document.querySelector('#rgb-color');
    rgbColor.innerText = trueColor;

    // Requisitos 3 e 4
    for (index = 1; index <= 6; index += 1) {
        let container = document.querySelector('#guesses-container');
        let color = document.createElement('div');
        let randomColor = 'rgb(' + JSON.stringify(parseInt(Math.random() * 255)) + ', ' + JSON.stringify(parseInt(Math.random() * 255)) + ', ' + JSON.stringify(parseInt(Math.random() * 255)) + ')';
        color.className = 'ball';
        container.appendChild(color);
        color.style.display = 'inline-block';
        color.style.height = 50 + 'px';
        color.style.width = 50 + 'px';
        color.style.borderRadius = 100 + '%';
        color.style.border = 2 + 'px solid black';
        color.style.marginRight = 10 + 'px';
        color.style.backgroundColor = randomColor;
    }
    // Requisito 5
    let colors = document.querySelectorAll('.ball');
    let randomIndex = parseInt(Math.random() * 6)
    colors[randomIndex].style.backgroundColor = trueColor;
    for (index = 0; index < colors.length; index += 1) {
        colors[index].addEventListener('click', checkAnswer);
    }
    function checkAnswer(event) {
        if (event.target.style.backgroundColor === trueColor) {
            document.querySelector('p').innerText = 'Acertou!';
            // Requisito 7
            totalPoints += 3;
            document.querySelector('#totalPoints').innerText = JSON.stringify(totalPoints);
        } else {
            document.querySelector('p').innerText = 'Errou! Tente novamente!';
        }
    }
    document.querySelector('#answer').innerText = 'Escolha uma cor!';
}
startGame();

// Requisito 6
let button = document.querySelector('#reset-game');
button.addEventListener('click', restartGame);
function restartGame() {
    for (index = 0; index < 6; index += 1) {
        let deletedBall = document.querySelector('.ball');
        deletedBall.remove();
    }
    startGame();
}

