let string = "";
let buttons = document.querySelectorAll(".button");
let string2 = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);

      document.querySelector('input').value = string;

    }
    else if (e.target.innerHTML == 'c') {
      string2 = string;
      string = "";

      document.querySelector('input').value = string;

    }
    else if (e.target.innerHTML == 'x^2') {

      string = eval(string * string);
      document.querySelector('input').value = string;


    }
    else if (e.target.innerHTML == '%') {

      string = eval(string / 100);
      document.querySelector('input').value = string;


    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;

    }

  })
})