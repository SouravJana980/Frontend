
//This array create for game input(color) store
let gameSequence = [];

//This array create for user input(color) store
let userSequence = [];
//access h3 tag
let h3 = document.querySelector('h3');

//initialy gameStart false when start button click then gameStart store false
let gameStart = false;
//initialy game level 0
let level = 0;

//Access start button
let startbtn = document.querySelector('button');

//When start button clicked then addEventListener activet and game started
startbtn.addEventListener("click", function(){

    //here check game was initial stage or not
    if(gameStart == false){
        console.log("Game is started");
    }

    //Here gamestart store true and this shows game is started
    gameStart = true;

    //This function call for levelup the game
    levelUp();

});

let btns = ["yellow","red","green","purple"];

//Game level up using this game
function levelUp(){
    //userSequence array empty for each time game level uping
    userSequence = [];
    level++;

    //here level show
    h3.innerText = `level ${level}`;

    //genaret random index
    let randomIndx = Math.floor(Math.random()*4);
    //Put color using random index
    let randomColor = btns[randomIndx];
    //
    let randombtn = document.querySelector(`.${randomColor}`);

    //genarete random color store in gameSequence array using push property
    gameSequence.push(randomColor);
    //print gameSequence array
    console.log(gameSequence);

    //which random color store in gameSequence this color flashing using this function
    btnflash(randombtn);
}


//This function using for flashing the color
function btnflash(btn){
    //color button add flash class for flashing the color button 
    btn.classList.add("flash");

    //How long flashing happen
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


//This function track user button press
function btnpress(){
    let btn = this;
    //press button color
    let userPressBtnColor = btn.getAttribute("id");
    //add color in userSequence
    userSequence.push(userPressBtnColor);

    //print userSequence
    console.log(userSequence);

    //flash button when user click button
    btnflash(btn);
    //user last press button check
    checkBtnColor(userSequence.length-1);
}

//Here allbtns access class list
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    
    btn.addEventListener("click",btnpress);
}

//This function check gameSequence userSequence same or not
function checkBtnColor(indx){
    if(gameSequence[indx] === userSequence[indx]){
        //gameSequence last color and userSequence last color match or not
        if(gameSequence.length === userSequence.length){
            //gameSequence last color and userSequence last color match then level up and delay 1s
            setTimeout(levelUp(),1000);
        }
    }
    else{
        //not match userSequence and gameSequence the show worning and reset
        h3.innerText = `Game Over! Again play click start button`;
        reset();
    }
}

//This function reset the game
function reset(){
    gameStart = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}
