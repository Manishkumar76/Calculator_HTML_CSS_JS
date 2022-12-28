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
    else if (e.target.innerHTML == 'm+') {

      string = (string2 + string);

      document.querySelector('input').value = string;

    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;

    }
    string2 = string;
  })
})