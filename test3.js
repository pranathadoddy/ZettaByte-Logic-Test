/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function deleteNulOrUndefinedRecursive(data) {
  data.forEach(child => {
    Object.keys(child).forEach(key => {
      if (child[key] === null || child[key] === undefined) {
        delete child[key];
      } else {
        if (Array.isArray(child[key])) {
          deleteNulOrUndefinedRecursive(child[key])
        }
      }
    })
  });

  return data;
}

function result(data) {
  // Your Code Here

  return deleteNulOrUndefinedRecursive(data);
}

console.log(result(data));
