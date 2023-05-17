let string = " ";
let buttons = document.querySelectorAll('.button');
let memory = 0; // Variable to store memory value

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'AC') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '%') {
            string = eval(string) / 100;
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'M+') {
            memory += eval(string);
            string = " ";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === 'M-') {
            memory -= eval(string);
            string = " ";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});