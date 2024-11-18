//UI

const minnum = document.querySelector('.minnumber'),
    maxnum = document.querySelector('.maxnumber'),
    getinput = document.querySelector('#guessnumber'),
    getbtn = document.querySelector("#btn"),
    message1 = document.querySelector('.message1'),
    message2 = document.querySelector('.message2'),
    getformgame = document.getElementById('gameform');

const min = 6,
    max = 10,
    win = 5;

let randomnum = Math.round(Math.random() * (max - min + 1)+min);

let gameleft = 3;

minnum.textContent = min;
maxnum.innerHTML = max;

getbtn.addEventListener('click', function (e) {
    e.preventDefault();

    let guess = +getinput.value;
    //console.log(typeof guess);

    if (guess < min || guess > max || isNaN(guess)) {
        message2.textContent = `Please enter a number between ${min} to ${max}`;
        setMessage2(`Please enter a number between ${min} to ${max}`, 'red');
    }

    if (guess === randomnum) {
        //Gameover WON
        // getinput.disabled = true;
        // getinput.style.borderColor = "green";

        // setMessage(`${randomnum} is correct!! You Won`,'green');

        // //Play agagin?
        // getbtn.value = "Play Again";

        gameover(true, `${randomnum} is correct !! You Won`);


    } else {
        gameleft -= 1;
        if (gameleft === 0) {
            //Gameover LOSE
            getinput.disabled = true;
            //    getinput.style.borderColor = "red";
            //    setMessage(`Gave Over, You Lost, The correct number is ${randomnum}`,'red');
            //    getbtn.value = "Play Again";
            gameover(false, `Gave Over, You Lost, The correct number is ${randomnum}`);
           
            
        } else {
            //Continue GAME

            //getinput border color to red
            //getinput.style.borderColor = "red";

            //message 1
            setMessage1(`${guess} is not correct!, ${gameleft} guess left`, 'blue');

            //clear getinput old value
            getinput.value = "";

            //auto focus getinput
            getinput.focus();
        }
    }


});

let setMessage1 = (msg, color) => {
    message1.textContent = msg;
    message1.style.color = color;
}

let setMessage2 = (msg, color) => {
    message2.textContent = msg;
    message2.style.color = color;

    setTimeout(() => {
        message2.textContent = "";
    }, 2000);
}

function gameover(won, msg) {
    let color;
    won === true ? color = "green" : color = "red";

    getinput.style.borderColor = color;

    setMessage1(msg, color);

    getbtn.value = "Play Again";

    //getbtn.className += " playagain";
    getbtn.classList.add('playagain');

    getformgame.addEventListener('mousedown',function(e){
        if(e.target.className === "btn playagain"){
            window.location.reload();
        }
       // console.log(e.type);
    })
}

// getformgame.addEventListener("mousedown",show);
// getformgame.addEventListener("mouseup",show);
// getformgame.addEventListener("click",show);

// function show(e){

// console.log(e.type);
// }




