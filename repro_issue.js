
function calculateIRPF_Current(baseCalculation, grossIncome) {
    let details = { baseTax: 0, redutor: 0, finalTax: 0, applied: false };
    
    // Atual implementação (usa grossIncome)
    if (grossIncome <= 5000.00) return 0;
    
    let irTax = (baseCalculation * 0.275) - 908.73;
    
    if (grossIncome <= 7350.00) {
        const coeficiente = parseFloat((0.133145 * grossIncome).toFixed(2));
        const redutor = 978.61 - coeficiente;
        if (redutor > 0) irTax -= redutor;
    }
    return irTax > 0 ? irTax : 0;
}

function calculateIRPF_Proposed(baseCalculation) {
    let details = { baseTax: 0, redutor: 0, finalTax: 0, applied: false };
    
    // Proposta (usa baseCalculation)
    if (baseCalculation <= 5000.00) return 0;
    
    let irTax = (baseCalculation * 0.275) - 908.73;
    
    if (baseCalculation <= 7350.00) {
        const coeficiente = parseFloat((0.133145 * baseCalculation).toFixed(2));
        const redutor = 978.61 - coeficiente;
        if (redutor > 0) irTax -= redutor;
    }
    return irTax > 0 ? irTax : 0;
}

// Cenário do Usuário
// "num tributavel de 6629 esta descontando 914 porem deveria descontar em torno de 818"
// Se desconta 914, a Base de Cálculo IR é 6629 (pois 6629 * 0.275 - 908.73 = 914.24)
// Se o bruto fosse maior (ex: 7700), o Current falharia em aplicar redutor.

const base = 6629.00;
// Estimando um bruto possível se base fosse 6629 (Base = Bruto - 14% -> Bruto = 7708)
const brutoEstimado = 7708.14; 

console.log(`Cenário: Base IR = ${base}, Bruto Estimado = ${brutoEstimado}`);
console.log(`IR Atual (914 esperados se falhar redutor): ${calculateIRPF_Current(base, brutoEstimado).toFixed(2)}`);
console.log(`IR Proposto (818 esperados): ${calculateIRPF_Proposed(base).toFixed(2)}`);

// Verificando cálculo do redutor proposto
const coef = 0.133145 * 6629;
const redutor = 978.61 - coef;
console.log(`Redutor Proposto: 978.61 - (${coef.toFixed(2)}) = ${redutor.toFixed(2)}`);
console.log(`IR Base: ${(base * 0.275 - 908.73).toFixed(2)}`);
console.log(`Final Proposto: ${(base * 0.275 - 908.73 - redutor).toFixed(2)}`);
