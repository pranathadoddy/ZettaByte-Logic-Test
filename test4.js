/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here

  const maximum = Math.max.apply(Math, numbers);
  const missing = [];
  for (let index = 0; index <= maximum; index++) {
    if(numbers.indexOf(index)=== -1){
      missing.push(index);
    }
    
  }

  return missing;
}

console.log(result(numbers));
