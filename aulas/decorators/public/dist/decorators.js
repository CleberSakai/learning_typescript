// // O decorator nos permite, além de executar o codigo junto com o metodo, modificar o comportamente dele por completo.
// function Decorator() {
//   return function (target, key, descriptor) {
//     // descriptor.value é o nosso método decorado
//     // vamos atribuir a ele uma nova função
//     descriptor.value = function (value: number) {
//       console.log(`Calculando ${value} elevado a 2`);
//       return Math.pow(value, 2);
//     };
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log() {
    return function (target, key, descriptor) {
        // Aqui guardamos o método original para chamá-lo manualmente
        const originalMethod = descriptor.value;
        // Aqui estamos usando a técnica de desestruturar um array
        // de argumentos para repassar quaisquer que sejam os argumentos originais
        descriptor.value = function (...args) {
            console.log("-------------------------------");
            console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log("-------------------------------");
            return result;
        };
    };
}
class Planet {
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2;
    }
    invertName() {
        return this.name.split("").reverse().join("");
    }
}
__decorate([
    log()
], Planet.prototype, "calculate", null);
__decorate([
    log()
], Planet.prototype, "invertName", null);
const planet = new Planet("Terra");
const result = planet.calculate(5);
console.log(`Resultado: ${result}`);
planet.invertName();
