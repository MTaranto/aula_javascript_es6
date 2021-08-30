// Mais utilizados

// Factory

function Pessoa() {
  return {
    name: 'Márcio',
    lastName: 'Taranto'
  }
}
const p = Pessoa();
console.log(p);

//      ou

function Pessoa(name) {
  return {
    name,
    lastName: 'Taranto'
  }
}
const p = Pessoa('Custom Name');
console.log(p);

//      ou

function Pessoa(customProperties) {
  return {
    name: 'Márcio',
    lastName: 'Taranto',
    ...customProperties
  }
}
const p = Pessoa({name: 'Custom Name', age: 46});
console.log(p);
