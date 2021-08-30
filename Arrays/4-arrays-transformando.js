// join
const arr = [1,2,3,4,5];
const arrToString = arr.join('-');
console.log(arrToString);
// 1-2-3-4-5

// reduce
const arr = [1,2,3,4,5];
const arrReduce = arr.reduce((total, value) => total += value, 0);
console.log(arrReduce);
// 15
// outro exemplo
const students = [
  {name: 'John', grade: 7},
  {name: 'Jenny', grade: 5},
  {name: 'Peter', grade: 4},
]
const nomesAlunos = students.reduce((studentNames, student) => studentNames += student.name + ' - ', '');
console.log(nomesAlunos);
// John - Jenny - Peter -
const studentMedia = students.reduce((mediaGrades, student) => mediaGrades += student.grade, 0) / students.length;
console.log(`A nota média dos estudantes é ${studentMedia}!`);
// 5.3333333
// outro exemplo
