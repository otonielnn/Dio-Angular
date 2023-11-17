// Funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

let soma: number = addNumber(4, 3);

console.log(soma);
console.log(addToHello("Otoniel"));

// Funções multi tipos

function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log(callToPhone(40028922));

// Função Assíncrona

async function getDatabase(id: number): Promise<string | number> {
    return "otoiel";
}