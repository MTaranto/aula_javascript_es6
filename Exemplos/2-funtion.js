(() => {
  this.name = 'arrow function'; // contexot de criação
  const getNameArrowFn = () => this.name;

  function getName () {
    return this.name;
  }

  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn, // Mesmo que getNameArrowFn: getNameArrowFn
  getName         // Quando a chave e o objeto tem o mesmo valor pode ser assim
}

console.log(user.getNameArrowFn());
console.log(user.getName());
})();