//const gamepads = {};
let gamepadID = null;

let rightStickSleepTime = "105"; // ms
let rightStickSleep = false;

let backspaceSleepTime = "125";
let backspaceSleep = false;

let spaceSleepTime = "125";
let spaceSleep = false;

let leftStick = 
[0, 0, 0,
 0, 0, 0,
 0, 0, 0];

let rightStick = 
[0, 0, 0,
 0, 0, 0,
 0, 0, 0];

let characterDict = [

    [   // 0    Top Left - 7th priority
        "", "j", "",
        "", "", "", 
        "", "q", ""
    ],

    [   // 1    DEAD TOP - TOP Priority
        "", "e", "",
        "r", "", "i", 
        "", "a", ""
    ],

    [   // 2
        "", "", "",
        "", "", "", 
        "", "", ""
    ],

    [   // 3   DEAD LEFT - 3rd priority
        "", "l", "",
        "u", "", "d", 
        "", "c", ""
    ],

    [   // 4 - NEUTRAL
        "", "", "",
        "", "", "", 
        "", "", ""
    ],

    [  // 5     DEAD RIGHT - 4th priority
        "", "p", "",
        "h", "", "g", 
        "", "m", ""
    ],

    [  // 6     Bottom Left - 5th priority
        "", "b", "",
        "y", "", "w", 
        "", "f", ""
    ],

    [  // 7     DEAD BOTTOM - 2nd priority
        "", "o", "",
        "n", "", "s", 
        "", "t", ""
    ],

    [  // 8     Bottom Right - 6th priority
        "", "k", "",
        "x", "", "z", 
        "", "v", ""
    ]

];


function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connected) {
    //gamepads[gamepad.index] = gamepad;
    gamepadID = gamepad.index;
    console.log("Gamepad connected!");
    inputLoop();
  } else {
    //delete gamepads[gamepad.index];
    gamepadID = null;
    console.log("Gamepad disconnected!");
  }
}

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
  },
  false,
);

function controllerInput() {

    if(gamepadID === null) return;

    const gamepadObject = navigator.getGamepads()[gamepadID];

    leftStick = 
    [0, 0, 0,
     0, 0, 0,
     0, 0, 0]
    
    rightStick = 
    [0, 0, 0,
     0, 0, 0,
     0, 0, 0]

    const stickDeadZone = 0.4;
    
    const leftRightValue = gamepadObject.axes[0];
    const leftDownValue = gamepadObject.axes[1];

    let leftInputH = 0;
    let leftInputV = 0;


    if(leftRightValue >= stickDeadZone) { // left stick, right side
        leftInputH = 1;     // RIGHT  
    } else if(leftRightValue <= -stickDeadZone){
        leftInputH = -1;
    } else {
        leftInputH = 0;
    }

    if(leftDownValue >= stickDeadZone) {
        leftInputV = -1;    
    } else if(leftDownValue <= -stickDeadZone){
        leftInputV = 1;     // UP
    } else {
        leftInputV = 0;
    }

    let leftIndexVal = -1;

    if(leftInputH === -1 && leftInputV === 1){
        leftStick[0] = 1;
        leftIndexVal = 0;
    } else if(leftInputH === 0 && leftInputV === 1){
        leftStick[1] = 1;
        leftIndexVal = 1;
    } else if(leftInputH === 1 && leftInputV === 1){
        leftStick[2] = 1;
        leftIndexVal = 2;
    } else if(leftInputH === -1 && leftInputV === 0){
        leftStick[3] = 1;
        leftIndexVal = 3;
    } else if(leftInputH === 0 && leftInputV === 0){
        leftStick[4] = 1;
        leftIndexVal = 4;
    } else if(leftInputH === 1 && leftInputV === 0){
        leftStick[5] = 1;
        leftIndexVal = 5;
    } else if(leftInputH === -1 && leftInputV === -1){
        leftStick[6] = 1;
        leftIndexVal = 6;
    } else if(leftInputH === 0 && leftInputV === -1){
        leftStick[7] = 1;
        leftIndexVal = 7;
    } else if(leftInputH === 1 && leftInputV === -1){
        leftStick[8] = 1;
        leftIndexVal = 8;
    }

    // now for the right stick

    const rightRightValue = gamepadObject.axes[2];
    const rightDownValue = gamepadObject.axes[3];

    let rightInputH = 0;
    let rightInputV = 0;

    if(rightRightValue >= stickDeadZone) { // right stick, right side
        rightInputH = 1;     // RIGHT  
        console.log("Right")
    } else if(rightRightValue <= -stickDeadZone){
        rightInputH = -1;
        console.log("Left")
    } else {
        rightInputH = 0;
    }


    if(rightDownValue >= stickDeadZone) {
        rightInputV = -1;    
    } else if(rightDownValue <= -stickDeadZone){
        rightInputV = 1;     // UP
    } else {
        rightInputV = 0;
    }


    let rightIndexVal = -1;


    if(rightInputH === -1 && rightInputV === 1){
        rightStick[0] = 1;
        rightIndexVal = 0;
    } else if(rightInputH === 0 && rightInputV === 1){
        rightStick[1] = 1;
        rightIndexVal = 1;
    } else if(rightInputH === 1 && rightInputV === 1){
        rightStick[2] = 1;
        rightIndexVal = 2;
    } else if(rightInputH === -1 && rightInputV === 0){
        rightStick[3] = 1;
        rightIndexVal = 3;
    } else if(rightInputH === 0 && rightInputV === 0){
        rightStick[4] = 1;
        rightIndexVal = 4;
    } else if(rightInputH === 1 && rightInputV === 0){
        rightStick[5] = 1;
        rightIndexVal = 5;
    } else if(rightInputH === -1 && rightInputV === -1){
        rightStick[6] = 1;
        rightIndexVal = 6;
    } else if(rightInputH === 0 && rightInputV === -1){
        rightStick[7] = 1;
        rightIndexVal = 7;
    } else if(rightInputH === 1 && rightInputV === -1){
        rightStick[8] = 1;
        rightIndexVal = 8;
    }

    const input = document.querySelector("input");

    // pressed: 'value'
    // left bumper: button 4
    // right bumper: button 5
    // left trigger: button 6, value > 0

    if(gamepadObject.buttons[4].value > 0 && !backspaceSleep) {
        input.value = input.value.slice(0, -1);
        backspaceSleep = true;
        setTimeout(() => {
            backspaceSleep = false;
        }, backspaceSleepTime);
    }

    if(gamepadObject.buttons[5].value > 0 && !spaceSleep) {
        input.value += " ";
        spaceSleep = true;
        setTimeout(() => {
            spaceSleep = false;
        }, spaceSleepTime);
    }

    if(leftIndexVal >= 0) {
        // if(leftIndexVal !== 4) console.log(leftIndexVal);
        let leftInputElements = document.querySelector(".left-input").children;
        Array.from(leftInputElements).forEach((element) => element.style.backgroundColor = "white");
        let leftHighlightedElement = leftInputElements[leftIndexVal];
        leftHighlightedElement.style.backgroundColor = "lightblue";
        
        if(rightIndexVal >= 0) {

            let leftHighlightedChildren = leftHighlightedElement.children;
            Array.from(leftHighlightedChildren).forEach((element) => element.style.backgroundColor = "transparent");
            let smallHighlightedElement = leftHighlightedChildren[rightIndexVal];
            if(rightIndexVal !== 4) smallHighlightedElement.style.backgroundColor = "red";
            if(!rightStickSleep) {

                if(gamepadObject.buttons[6].value === 0) {
                    input.value += smallHighlightedElement.innerText;
                } else {
                    input.value += smallHighlightedElement.innerText.toUpperCase();
                }
                
                
                rightStickSleep = true;

                setTimeout(() => {
                    rightStickSleep = false;
                }, rightStickSleepTime);

            }
        }

    }

}

function inputLoop() {
    
    controllerInput();

    requestAnimationFrame(inputLoop);
}

// this sets all the characters on the page to show up in the different boxes
function initCharacters() {

    const largeSquares = document.querySelectorAll(".left-input > div");
    Array.from(largeSquares).map((element, index) => {
        for(let i = 0; i < 9; i++){
            let smallBox = document.createElement('div');
            smallBox.innerText = characterDict[i][index];
            largeSquares[i].appendChild(smallBox);
        }

    })

}

initCharacters();