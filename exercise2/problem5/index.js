function getBudgets(arr) {
    // Your code
  return arr.reduce((totalBudget, person) => totalBudget + person.budget, 0);
}

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
); // 65700

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
); // 62600


module.exports = getBudgets;
