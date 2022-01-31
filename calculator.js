// getting elements from DOM

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let oldOption = document.querySelector('.angle');
let secondTray = document.querySelector('.second_tray')
let memoryActive = document.querySelectorAll('.memory_function');
let secondFunctions = document.querySelectorAll('.second_functions');

// screenOutput variable maintains the answer of every operation for next calculation and arr_list acts as Memory

let screenOutput = '';
let arr_list = [];

// adding eventListener to every button using for...of... loop from collection of buttons
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;


        if (buttonText == 'x') {
            buttonText = '*';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == 'C') {
            screenOutput = '';
            screen.value = screenOutput;
        }
        else if (buttonText == '=') {
            result= eval(screen.value);
            screenOutput = result;
            screen.value=screenOutput;
        }
        else if (buttonText == '⌫') {
            screenOutput = screen.value.substr(0, screen.value.length - 1);
            screen.value = screenOutput;
        }

        // Angle unit converter functions
        else if (buttonText === 'DEG') {
            screenOutput = screen.value * (180 / Math.PI)
            screen.value = screenOutput;
            oldOption.innerText = 'RAD';
        }
        else if (buttonText == 'RAD') {
            screenOutput = screen.value * (Math.PI / 180)
            screen.value = screenOutput;
            oldOption.innerText = 'DEG';
        }
        else if (buttonText == 'F-E') {
            let x = screen.value;
            screenOutput = parseFloat(x).toExponential();
            screen.value = screenOutput;
        }

        // Memory Functions
        else if (buttonText == 'MS') {
            arr_list = [];
            arr_list.push(screen.value);
            for (item of memoryActive) {
                item.style.color = "black";
            }
        }
        else if (buttonText == 'MC') {
            arr_list = [];
            for (item of memoryActive) {
                item.style.color = "gray";
            }
        }
        else if (buttonText == 'M+') {
            screenOutput = parseFloat(arr_list[arr_list.length - 1]) + parseFloat(screen.value);
            let a = screen.value;
            arr_list.push(screenOutput);
            screen.value = screenOutput;
        }
        else if (buttonText == 'M-') {
            screenOutput = parseFloat(arr_list[arr_list.length - 1]) - parseFloat(screen.value);
            screen.value = screenOutput;
            arr_list[arr_list.length - 1] = screenOutput;
        }
        else if (buttonText == 'MR') {
            screen.value = arr_list.slice(arr_list.length - 1, arr_list.length);
        }

        // Functions change on click form 1st-Tray to 2nd-Tray
        
        else if (buttonText == '2nd') {
            for (item of secondFunctions) {
                let funValue = item.innerText;
                switch (funValue) {
                    case "x2":
                        item.innerHTML = 'x<sup>3</sup>';
                        break;
                    case "√x":
                        item.innerHTML = '<sup>3</sup>√x';
                        break;
                    case "xy":
                        item.innerHTML = 'x<sup>y</sup>';
                        break;
                    case "10x":
                        item.innerHTML = '2<sup>x</sup>';
                        break;
                    case "log":
                        item.innerHTML = 'log';
                        break;
                    case "ln":
                        item.innerHTML = 'e<sup>x</sup>';
                        break;
                }
              secondTray.innerText = "1st";
            }
        }

        else if (buttonText == '1st') {
            for (item of secondFunctions) {
                let funValue = item.innerText;
                console.log(funValue)
                switch (funValue) {
                    case "x3":
                        item.innerHTML = 'x<sup>2</sup>';
                        break;
                    case "3√x":
                        item.innerHTML = '√x';
                        break;
                    case "xy":
                        item.innerHTML = 'x<sup>y</sup>';
                        break;
                    case "2x":
                        item.innerHTML = '10<sup>x</sup>';
                        break;
                    case "log":
                        item.innerHTML = 'log';
                        break;
                    case "ex":
                        item.innerHTML = 'ln';
                        break;
                }
                secondTray.innerText = "2nd";
            }
        }

        else if (buttonText == 'x2') {
            screenOutput = Math.pow(screen.value, 2);
            screen.value = screenOutput;
        }
        else if (buttonText == '√x') {
            screenOutput = Math.sqrt(screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'xy') {
            buttonText = '**';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == '10x') {
            screenOutput = Math.pow(10, screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'log') {
            screenOutput = Math.log10(screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'ln') {
            screenOutput = Math.log(screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'x3') {
            screenOutput = Math.pow(screen.value, 3);
            screen.value = screenOutput;
        }
        else if (buttonText == '3√x') {
            screenOutput = Math.cbrt(screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == '2x') {
            screenOutput = Math.pow(2, screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'ex') {
            screenOutput = Math.pow(Math.E, screen.value);
            screen.value = screenOutput;
        }


        else if (buttonText == 'π') {
            screenOutput = Math.PI;
            screen.value = screenOutput;
        }
        else if (buttonText == 'e') {
            screenOutput = Math.E;
            screen.value = screenOutput;
        }
        else if (buttonText == 'n!') {
            var i, num, f;
            f = 1
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            screenOutput = f;
            screen.value = screenOutput;
        }
        else if (buttonText == '1/x') {
            screenOutput = 1 / screen.value;
            screen.value = screenOutput;
        }
        else if (buttonText == '|x|') {
            screenOutput = Math.abs(screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'exp') {
            screenOutput = Math.pow(Math.E, screen.value);
            screen.value = screenOutput;
        }
        else if (buttonText == 'mod') {
            buttonText = '%';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == '+/-') {
            screenOutput = screen.value * (-1);
            screen.value = screenOutput;

        }
        
        // avoiding number of zeroes before valid operand

        else if(buttonText == '0'){
            screen.value='0';
        }

         else {
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
    })
}

// function of Trignometry and Other Mathematical functions of select from dropdown

function trigno(fun) {
    switch (fun) {
        case "sine":
            screenOutput = Math.sin(screen.value);
            screen.value = screenOutput;
            break;
        case "cosine":
            screenOutput = Math.cos(screen.value);
            screen.value = screenOutput;
            break;
        case "tan":
            screenOutput = Math.tan(screen.value);
            screen.value = screenOutput;
            break;
    }
}

function dropDownFun(fun) {
    switch (fun) {
        case "floor":
            screenOutput = Math.floor(screen.value);
            screen.value = screenOutput;
            break;
        case "ceil":
            screenOutput = Math.ceil(screen.value);
            screen.value = screenOutput;
            break;
        case "random":
            screenOutput = Math.random(screen.value);
            screen.value = screenOutput;
            break;
    }
}

