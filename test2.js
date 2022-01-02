/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  let uniqueArray = [...new Set(data)] ;
  uniqueArray =uniqueArray.sort(function(a, b){return a - b});
  return (uniqueArray);
}

console.log(result(data));
