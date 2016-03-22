function sum(num1, num2) {
  var total = (num1 + num2);
  return total;
  // console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + total);
}
exports.sum = sum;

function multiply(num1, num2) {
  var total = (num1 * num2);
  return total;
  // console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + total);
}
exports.multiply = multiply;

function sumAndMultiply(num1, num2, num3) {
  var array = [];
  var sumFirstTwo = sum(num1, num2);
  var sumAll = sum(sumFirstTwo, num3);
  array[0] = sumAll;
  var multFirstTwo = multiply(num1, num2);
  var multAll = multiply(multFirstTwo, num3);
  array[1] = multAll;
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' +sumAll + '.');
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multAll + '.');
  return array;
}
exports.sumAndMultiply = sumAndMultiply;

function sumArray(array) {
  var sumItems = 0;
  for (var i=0; i<array.length; i++) {
    sumItems += array[i];
  }
  //The line below makes a test that should pass, fail.
  // console.table(array);
  console.log(array + ' was passed in as an array of numbers, and ' + sumItems + ' is their sum.');
  return sumItems;
}
exports.sumArray = sumArray;

function multiplyArray(array) {
  var productItems = 1;
  for (var i=0; i<array.length; i++) {
    productItems *= array[i];
  }
  //The line below makes a test that should pass, fail.
  // console.table(array);
  console.log('The numbers ' + array + ' have a product of ' + productItems + '.');
  return productItems;
}
exports.multiplyArray = multiplyArray;
