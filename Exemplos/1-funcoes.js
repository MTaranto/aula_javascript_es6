function getName() {
    return 'Márcio Taranto';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
