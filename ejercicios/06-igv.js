// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 06
// Cálculo de IGV
// Declara const subtotal=100, const TASA_IGV=0.18. Calcula igv y totalPagar, muestra el total.

const subtotal = 100;
const TASA_IGV = 0.18;

const igv = subtotal * TASA_IGV;
const totalPagar = subtotal + igv;

console.log("El total a pagar (incluyendo IGV) es: " + totalPagar);
