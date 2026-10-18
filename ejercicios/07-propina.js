// Desarrollo de Interfaces 1 | Guía 01 | Ejercicio 07
// Calculadora de propina
// Declara const montoTexto="80.50", const porcentajeTexto="10". Convierte ambos a Number; calcula propina y totalConPropina (monto + propina).

const montoTexto = "80.50";
const porcentajeTexto = "10";

const monto = Number(montoTexto);
const porcentaje = Number(porcentajeTexto);

const propina = monto * (porcentaje / 100);
const totalConPropina = monto + propina;

console.log("Monto: $" + monto);
console.log("Propina (" + porcentaje + "%): $" + propina);
console.log("Total con propina: $"  + totalConPropina);
