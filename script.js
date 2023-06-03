const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset');
const winningscoreselect = document.querySelector('#winnscr');


let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click',
    () => {
        if (!isGameOver) {
            p1score += 1;
            if (p1score === winningScore) {
                isGameOver = true;
                p1Display.classList.add('winner');
                p2Display.classList.add('loser');

            }
            p1Display.textContent = p1score;
        }
    });

p2Button.addEventListener('click',
    () => {
        if (!isGameOver) {
            p2score += 1;
            if (p2score === winningScore) {
                isGameOver = true;
                p2Display.classList.add('winner');
                p1Display.classList.add('loser');
            }
            p2Display.textContent = p2score;
        }
    })

winningscoreselect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetnow();
})

reset.addEventListener('click', resetnow);
function resetnow() {
    p1score = 0;
    p2score = 0;
    isGameOver = false;
    p1Display.textContent = p1score;
    p2Display.textContent = p2score;
    p1Display.classList.remove('winner', 'loser'); // this is used to remove the currently active classes if any ..
    p2Display.classList.remove('winner', 'loser');
}



