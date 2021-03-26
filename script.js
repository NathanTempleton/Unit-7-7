document.getElementById('button').addEventListener('click', math)

let num1 = 0
let num2 = 0
let counter = 0
let answer = 0

function math () {
  answer = 0
  num1 = document.getElementById('num1-input').value
  num2 = document.getElementById('num2-input').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)

  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }
  document.getElementById('result').innerHTML = 'Your answer is: ' + answer
}
