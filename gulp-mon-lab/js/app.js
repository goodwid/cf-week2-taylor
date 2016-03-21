var pFunctionIn  = document.getElementById('pFunctionIn');
var pFunctionOut = document.getElementById('pFunctionOut');

var arg = [4,5];
pFunctionIn.textContent  = 'Calling sum() with an argument of ' + arg;
pFunctionOut.textContent = 'sum() returned ' + sum(arg);
