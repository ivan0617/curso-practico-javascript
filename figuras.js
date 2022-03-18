//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();

//Código del circulo
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return Math.PI * diametro;
} 

function areaCirculo(radio) {
    return Math.PI*(radio*radio);
} 
console.groupEnd();

//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado").value;
    //const value = input.value;

    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1T").valueAsNumber;
    const lado2 = document.getElementById("lado2T").valueAsNumber;
    const base = document.getElementById("baseT").valueAsNumber;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("baseT").valueAsNumber;
    const altura = document.getElementById("alturaT").valueAsNumber;

    const area = areaTriangulo(base, altura);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("radio").valueAsNumber;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio").valueAsNumber;

    const area = areaCirculo(radio);
    alert(area);
}

function calcularAlturaTrianguloIsoceles(){
    const lado1 = document.getElementById("lado1Ti").valueAsNumber;
    const lado2 = document.getElementById("lado2Ti").valueAsNumber;
    const base = document.getElementById("baseTi").valueAsNumber;

    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt((lado1*lado1) -((base*base)/4));
        alert(altura)
    }else {
        alert("No es un triangulo isoceles");
        return 0;
    }
}
