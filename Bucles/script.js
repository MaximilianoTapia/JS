//impares 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//disminuir multliplo de 3
for (let i = 100; i >= 0; i -= 3) {
    console.log(i);
}

//imprimir secuencia
let num = 4;
let step = -1.5;

while (num >= -3.5) {
    console.log(num);
        num += step;
}

//sigma
let sum = 0;

for (let i = 1; i <= 100; i++) {
sum += i;
}

console.log(sum);

//factorial
let product = 1;

for (let i = 1; i <= 12; i++) {
  product *= i;
}

console.log(product);
