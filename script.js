//Números
let a = 10;
let b = 5;
let c = 7.9826;
//Números 1
function suma(a, b) {
    return a + b;
}
console.log("Números:actividad 1:", suma(a, b));
//Números 2
function resta(a, b) {
    return a - b;
}
console.log("Números:actividad 2:", resta(a, b));
//Números 3
function producto(a, b) {
    return a * b;
}
console.log("Números:actividad 3:", producto(a, b));
//Números 4
function division(a, b) {
    return a / b;
}
console.log("Números:actividad 4:", division(a, b));
//Números 5
function potencia(base, exponent) {
    return Math.pow(base, exponent);
}
console.log("Números:actividad 5:", potencia(a, b));
//Números 6
function resto(a, b) {
    return a % b;
}
console.log("Números:actividad 6:", resto(a, b));
//Números 7
function raizCuadrada(a) {
    return Math.sqrt(a);
}
console.log("Números:actividad 7:", raizCuadrada(a));
//Números 8
function valorAbsoluto(a) {
    return Math.abs(a);
}
console.log("Números:actividad 8:", valorAbsoluto(-a));
//Números 9
function redondear(c) {
    return Math.round(c);
}
console.log("Números:actividad 9:", redondear(c));
//Números 10
function numeroAleatorio() {
    return Math.random();
}
console.log("Números:actividad 10:", numeroAleatorio());
//Letras
let cadena1="Hola ";
let cadena2="Mundo";
let cadena3="Hola Mundo!";
let palindromo="reconocer";
//Letras 1
function concatenar(cadena1, cadena2) {
    return cadena1 + cadena2;
}
console.log("Letras 1:", concatenar(cadena1, cadena2));
//Letras 2
function longitud(cadena) {
    return cadena.length;
}
console.log("Letras 2:", longitud(cadena3));
//Letras 3
function mayusculas(cadena) {
    return cadena.toUpperCase();
}
console.log("Letras 3:", mayusculas(cadena3));
//Letras 4
function minusculas(cadena) {
    return cadena.toLowerCase();
}
console.log("Letras 4:", minusculas(cadena3));
//Letras 5
function obtenerCaracter(cadena, indice) {
    return cadena.charAt(indice);
}
console.log("Letras 5:", obtenerCaracter(cadena3, 5));
//Letras 6
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
console.log("Letras 6:", invertirCadena(cadena3));
//Letras 7
function contarCaracter(cadena, caracter) {
    return cadena.split(caracter).length - 1;
}
console.log("Letras 7:", contarCaracter(cadena3, "o"));
//Letras 8
function eliminarEspacios(cadena) {
    return cadena.replace(/\s+/g, '');
}
console.log("Letras 8:", eliminarEspacios(cadena3));
//Letras 9 
function esPalindromo(cadena) {
    let cadenaNormalizada = cadena.replace(/\s+/g, '').toLowerCase();
    let cadenaInvertida = cadenaNormalizada.split('').reverse().join('');
    return cadenaNormalizada === cadenaInvertida;
}
console.log("Letras 9:", esPalindromo(palindromo));
//Letras 10
function capitalizarPalabras(cadena) {
    return cadena.replace(/\b\w/g, function(letra) {
        return letra.toUpperCase();
    });
}
console.log("Letras 10:", capitalizarPalabras(palindromo));
// Array
const numeros = [2, 4, 6, 7, 9, 11];
const masNumeros = [1, 3, 5];
//Array 1
function sumaArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log("Array 1: Suma =", sumaArray(numeros));
//Array 2
function promedioArray(arr) {
    return sumaArray(arr) / arr.length;
}
console.log("Array 2: Promedio =", promedioArray(numeros));
//Array 3
function ordenarAscendente(arr) {
    return [...arr].sort((a, b) => a - b);
}
console.log("Array 3: Ordenado Ascendente =", ordenarAscendente(numeros));
//Array 4
function mayoresQue(arr, numero) {
    return arr.filter(el => el > numero);
}
console.log("Array 4: Mayores que 15 =", mayoresQue(numeros, 15));
//Array 5
function unirArrays(arr1, arr2) {
    return [arr1,arr2];
}
console.log("Array 5: Unir Arrays =", unirArrays(numeros, masNumeros));
//Objetos
let persona = {
    nombre: "Sofía",
    edad: 24
}
//Objetos 1
function obtenerNombre(obj) {
    return obj.nombre;
}
console.log("Objeto 1: Nombre =", obtenerNombre(persona));
//Objetos 2
function actualizarEdad(obj, nuevaEdad) {
    obj.edad = nuevaEdad;
    return obj;
}
console.log("Objeto 2: Edad actualizada =", actualizarEdad(persona, 35));
//Objetos 3
function agregarPropiedad(obj, nuevaProp) {
    obj[nuevaProp] = null;
    return obj;
}
console.log("Objeto 3: Propiedad agregada =", agregarPropiedad(persona, "profesion"));
//Objetos 4
function eliminarPropiedad(obj, prop) {
    delete obj[prop];
    return obj;
}
console.log("Objeto 4: Propiedad eliminada =", eliminarPropiedad(persona, "profesion"));
//Objetos 5
function contarPropiedades(obj) {
    return Object.keys(obj).length;
}
console.log("Objeto 5: Número de propiedades =", contarPropiedades(persona));
