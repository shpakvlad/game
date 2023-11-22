// nogame
let nogameBtn = document.querySelector("#nogame-btn");
let nogameMsg = document.querySelector("#nogame-msg");

let game = new Game();
let trying = 0;
let gameTime = 0;

nogameBtn.addEventListener("click", () => {
    nogameMsg.classList.remove("hide");
});

// game
let gameRules = document.querySelector("#game-rules");
let gameBlock = document.querySelector("#game");
let gameBtn = document.querySelector("#game-btn");

gameBtn.addEventListener("click", () => {
    gameRules.classList.add("hide");
    gameBlock.classList.remove("hide");
    nogameMsg.classList.add("hide");

    setInterval(() => {
        gameTime++
    }, 1000);
});

//answer
let userAnswer = document.querySelector("#user-answer");
let userAnswerBtn = document.querySelector("#user-answer-btn");
let greatteMsg = document.querySelector("#greatter-msg");
let winMsg = document.querySelector("#win-msg");
let lessMsg = document.querySelector("#less-msg");
let reportMsg = document.querySelector("#report-msg");
let tryMsg = document.querySelector("#try");
let timeMsg = document.querySelector("#time");

userAnswerBtn.addEventListener("click", () => {
    checkResult = game.checkAnswer(userAnswer.value);

    trying++;

    if(checkResult > 0) {
        greatteMsg.classList.remove("hide");
        closeMsgBox(greatteMsg);
    } 
    else if (checkResult == 0){
        winMsg.classList.remove("hide");

        gameBlock.classList.add("hide");

        tryMsg.innerHTML = `Количество попыток : ${trying} `;
        timeMsg.innerHTML = `Прошло времени : ${gameTime} сек.`;
        
        reportMsg.classList.remove("hide");

    } else if (checkResult < 0) {
        lessMsg.classList.remove("hide");
        closeMsgBox(lessMsg);        
    }
});

//reset game
let resetgameBtn = document.querySelector("#reset-game");
resetgameBtn.addEventListener("click", () => {

    winMsg.classList.add("hide");
    reportMsg.classList.add("hide");
    gameBlock.classList.remove("hide");

    game = new Game();
    trying = 0;
    gameTime = 0;
    userAnswer.value = '';    
})

// close msg box after time
function closeMsgBox(msgbox, time = 3000) {
    setInterval(() => {
        msgbox.classList.add("hide");
    }, time);
}
