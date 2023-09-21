let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})

// Rokas Rumeika, Gustas Šiurkus
let calculation = "";
function pridetiSkaiciu(number) {
  calculation += number;
  
let limitedText = calculation.slice(0, 8);

  document.getElementById("result").innerHTML = limitedText;
  
}
function pridetiOperatoriu(operator) {
  calculation += operator;
  document.getElementById("result").innerHTML = calculation;
}
function suskaiciuoti() {
  let result = eval(calculation);
  document.getElementById("resultatas").innerHTML = result;
  calculation += "";
}
function isvalytirezultata() {
  calculation = ""; 
  document.getElementById("result").innerHTML = "";
  document.getElementById("resultatas").innerHTML = "0";
}
function istrintiSkaiciu() {
  calculation = calculation.slice(0, -1); 
  document.getElementById("result").innerHTML = calculation;
}
function procentai(operator, number) {
 calculation += operator
 let procentai = (calculation / 100);
  document.getElementById("result").innerHTML = procentai;
}



