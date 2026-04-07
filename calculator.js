// Add two numbers
function add(a, b) {
  return a + b;
}

// Divide two numbers (safe)
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Test output
console.log(add(2, 3));       // 5
console.log(divide(10, 2));   // 5
console.log(divide(10, 0));   // Error
console.log(multiply(4, 5));  // 20
console.log(add(2, 3));       // 5
console.log(divide(10, 2));   // 5
console.log(divide(10, 0));   // Error
console.log(multiply(4, 5)); 
