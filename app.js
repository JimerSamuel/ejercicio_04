// if
let numeroIf = 5;

if (numeroIf > 0) {
  console.log("El número es positivo");
} else if (numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

// while
let numeroWhile = 0;

while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

// do while
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 3);

// for
for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// switch
let estacion = "verano";

switch (estacion) {
  case "primavera":
    console.log("La estación es primavera");
    break;
  case "verano":
    console.log("La estación es verano");
    break;
  case "otoño":
    console.log("La estación es otoño");
    break;
  case "invierno":
    console.log("La estación es invierno");
    break;
  default:
    console.log("No es una estación válida");
    break;
}
