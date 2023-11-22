class Game {
    #number = null;
    constructor() {
        this.#number = Math.floor(Math.random() * 101);
        console.log(this.#number);
    }

    checkAnswer(answer) {
        if (answer > this.#number) {
            return 1;
        } else if (answer == this.#number) {
            return 0;
            userWin = true;
        } else if (answer < this.#number) {
            return -1;
        }
    }
}
