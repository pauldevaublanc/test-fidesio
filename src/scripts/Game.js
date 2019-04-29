import '../styles/index.scss';


export default class Game {
    constructor() {
        this.initGrid();
        this.player1 = true;
        this.time= 3 * 60;
        this.scorePlayer1 = 0;
        this.scorePlayer2 = 0;
        this.sequencePlayer1 = [];
        this.sequencePlayer2 = [];
        this.interval = null;
        this.combosWinner = [ 
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    }

    initGrid() {
        document.body.addEventListener('click', (evt) => {
            this.addItem(evt);
            this.isDraw();
        }, false);
        window.addEventListener('load', () => {
            document.getElementsByClassName('player1-score')[0].append(this.scorePlayer1);
            document.getElementsByClassName('player2-score')[0].append(this.scorePlayer2);
            
            const display = document.querySelector('#time');
            this.startTimer(this.time, display);
        });
    }


    addItem(evt) {
        if (evt.target.className === 'box') {
            if (evt.target.innerHTML === "") {
                
                if (this.player1 === true) {
                    (evt.target).append("O");
                    document.getElementsByClassName('player')[1].classList.add('player-active');
                    document.getElementsByClassName('player')[0].classList.remove('player-active');
                    this.sequencePlayer1.push(parseInt(evt.target.getAttribute("id")));
                    this.isWinner(this.sequencePlayer1);
                    if (this.isWinner(this.sequencePlayer1) === true) {
                        
                        this.scorePlayer1 += 1;
                        document.getElementsByClassName('player1-score')[0].innerHTML = this.scorePlayer1;
                        
                        this.clearBoard();
                    }
                    this.player1 = false;
                }
                else {
                    (evt.target).append("X");
                    document.getElementsByClassName('player')[0].classList.add('player-active');
                    document.getElementsByClassName('player')[1].classList.remove('player-active');
                    this.sequencePlayer2.push(parseInt(evt.target.getAttribute("id")));
                    this.isWinner(this.sequencePlayer2);
                    if (this.isWinner(this.sequencePlayer2) === true) {
                        
                        this.scorePlayer2 += 1;
                        document.getElementsByClassName('player2-score')[0].innerHTML = this.scorePlayer2;                        
                        this.clearBoard();
                        
                    }
                    this.player1 = true;
                }
            }
        }
    }

    isWinner(arrayToCheck) {
        const combos = this.combosWinner;
        return !!combos.find((combo) => {
            return arrayToCheck.filter((elem) => {
                return combo.indexOf(elem) > -1;
            }).length == combo.length;
        });
    }

    isDraw(){
        if (this.sequencePlayer1.length + this.sequencePlayer2.length >= 9) {
            this.clearBoard(); 
        }
    }

    startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        this.interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            timer -= 1;
    
            if (timer < 0) {
                timer = duration;
                this.stopGame();
            }
        }, 1000);
    }

    stopGame() {
        this.clearBoard();
        clearInterval(this.interval);
        if (this.scorePlayer1 > this.scorePlayer2) {
            alert(`player 1 wins : ${this.scorePlayer1}/${this.scorePlayer2}`);
        } else if (this.scorePlayer1 < this.scorePlayer2){
            alert(`player 2 wins : ${this.scorePlayer2}/${this.scorePlayer1}`);
        } else {
            alert('draw');
        }
        

    }

    clearBoard() {
        var elements = document.getElementsByClassName("box");
        this.player1 = true;
        this.sequencePlayer1 = [];
        this.sequencePlayer2 = [];
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].innerHTML = "";
        }
    }
   
}





