console.log('app');

/* //Create
var toods =['운동'];
var todo = '게임';
toods.push(todo);
console.log(todos);
//Read
todos.forEach(function(todo){
    console.log(todo);
});
//Update
var arr = ['운동','게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);
// Delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos); */

/* var isMan = ture;
if(isMan){
    console.log('1');
}
else if (!isMan && isHero){
}
else {
    console.log('2');
} */

/* var count = [10,20,30,40,50,60,70,100,110,120];
const result = count.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
const average = result / count.length;
console.log(average);  */

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      input  = prompt("더 할 숫자를 입력해 주 세요.", 0);
  
      if (value === "" || value === null || !isFinite(value));
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
sumInput();
//