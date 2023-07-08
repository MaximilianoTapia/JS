//siempre hambriento

function verificarComida(arr) {
    let tieneComida = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "comida") {
        console.log("¡Delicioso!");
        tieneComida = true;
    }
    }

    if (!tieneComida) {
        console.log("Tengo hambre");
    }
}

//filtro paso alto

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
    }
    }

    return filteredArr;
}

    var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
  console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//mejor que el promedio

function betterThanAverage(arr) {
    var sum = 0;
    // Calcula la suma de todos los números en el arreglo
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;
    var count = 0;

    // Cuenta cuántos números son mayores que el promedio
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
        count++;
    }
    }

    return count;
}

    var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
  console.log(result); // esperamos 4 de vuelta


//arreglo invertido

function reverse(arr) {
    var reversedArr = [];

    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

    var result = reverse(["a", "b", "c", "d", "e"]);
  console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


//arreglo fibonacci

function fibonacciArray(n) {
    var fibArr = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextNum = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextNum);
    }

    return fibArr;
}

    var result = fibonacciArray(10);
  console.log(result); // esperamos de vuelta [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
