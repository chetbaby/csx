function countdown(n) {
  if (n === 0) { return n; };
  // console.log('return countdown(n - 1);', countdown(n - 1););
  return countdown(n - 1);
}

console.log('countdown(5);', countdown(5));
console.log('countdown(10);', countdown(10));
