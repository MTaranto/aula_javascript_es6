(() => {
  const test = 'Valor função';
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    const test = 'Valor if';
    console.log(`Valor dentro do if "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();
