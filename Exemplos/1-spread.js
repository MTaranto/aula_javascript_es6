// Spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
//Resultado: var musica = ['cabeça', 'ombro', 'joelhos', 'e', 'pés'];


function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args); // Resultado: X vale 0, y vale 1 e z vale 2