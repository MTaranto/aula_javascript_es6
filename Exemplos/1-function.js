function fn () {
  return 'Code here';
}
// comando da linha 5 executa a mesma coisa que os da linha 1 até 3
const arrowfn = () => 'Code here';
const arrowfn2 = () => {
  // Mais de uma expressão
  return 'Code here';
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logfnResult = fnParam => console.log(fnParam());

logfnResult(fn);

// Receber e retornar funções
const controlFnExec => fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution();      // Não executará a função fn

// controlFnExec como função
function controlFnExec (fnParam) {
  return function(allowed) {
    if (allowed) {

    }
  }
}
// Linha 23 até 28 executa mesma coisa que da linha 36 até 42
