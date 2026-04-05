function add(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b  // bug: division by zero possible!
}

function multiply(a, b) {
  var result = a * b
  var unused = "hello"  // unused variable
  return result
}

var password = "admin123"  // exposed secret!
console.log(password)
// testing railway deployment
// testing railway fix
// testing railway testttt
