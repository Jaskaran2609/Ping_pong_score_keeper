const but1 = document.querySelector('#player1scr');
const but2 = document.querySelector('#player2scr');
const dis1 = document.querySelector('#display1');
const dis2 = document.querySelector('#display2');
const reset = document.querySelector('#rst');
const inputtargetsetter = document.querySelector('#numofgoal');

let player1score = 0;
let player2score = 0;
let winningscore = 5;
let isgameover = false;

but1.addEventListener('click',
    function () {
        if (!isgameover) {
            player1score += 1;
            dis1.textContent = player1score;
        }
        if (player1score === winningscore) {
            isgameover = true;
            dis1.classList.add('winner');
            dis2.classList.add('loser');
            but1.disabled = true;
            but1.classList.add('is-static');
            but2.disabled = true;
            but2.classList.add('is-static');
        }
    }
)
but2.addEventListener('click',
    function () {
        if (!isgameover) {
            player2score += 1;
            dis2.textContent = player2score;
        }
        if (player2score === winningscore) {
            isgameover = true;
            dis2.classList.add('winner');
            dis1.classList.add('loser');
            but1.classList.add('is-static');
            but2.classList.add('is-static');
        }
    }
)
inputtargetsetter.addEventListener('change',
    function () {
        resetnow();
        const valuee = parseInt(this.value);
        winningscore = valuee;
    }

)
reset.addEventListener('click', resetnow);

function resetnow() {
    player1score = 0;
    player2score = 0;
    dis1.textContent = 0;
    dis2.textContent = 0;
    isgameover = false;
    dis1.classList.remove('winner', 'loser');
    dis2.classList.remove('winner', 'loser');
    but1.classList.remove('is-static');
    but2.classList.remove('is-static');

}