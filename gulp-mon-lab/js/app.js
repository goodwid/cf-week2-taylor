var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = '2, 3, 4';
pFunctionIn.textContent  = 'Calling sumAndMultiply() with an argument of ' + arg;
pFunctionOut.textContent = 'sumAndMultiply() returned ' + sumAndMultiply(2,3,4);
