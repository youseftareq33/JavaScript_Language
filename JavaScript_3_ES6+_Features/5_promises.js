/* promise: is an object that represents the final result of an asynchronous operation.
= it has three states: 

  - pending: not finished yet

  - fulfilled: operation completed successfully, and we use .then to do something after operation completed successfully

  - rejected: operation failed, and we use .catch to handel the reject
*/

const asyncOperation=fetch('https://jsonplaceholder.typicode.com/todos/1');

asyncOperation.then(res=>console.log(res));