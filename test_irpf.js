
function calculateIRPF(baseCalculation, grossIncome) {
    console.log(`--- Calculando IRPF ---`);
    console.log(`Base de Cálculo (após deduções): R$ ${baseCalculation.toFixed(2)}`);
    console.log(`Rendimento Bruto (grossIncome): R$ ${grossIncome.toFixed(2)}`);

    // 1. Isenção para rendimentos tributáveis abaixo de R$ 5.000,00
    // O usuário disse: "valores tributaveis conforme calculo atual abaixo de 5.000 ficará isento"
    // Ele se refere ao rendimento BRUTO ou à BASE?
    // No exemplo: "Rendimentos tributáveis de R$ 7.000,00".
    // "Aplicação da faixa 2: Redutor – (Coeficiente × rendimentos sujeitos à incidência de IR)" -> usa 7.000.
    // Então a regra de isenção de 5000 parece ser sobre o bruto também, ou sobre a base?
    // "valores tributaveis conforme calculo atual abaixo de 5.000 ficará isento".
    // Normalmente isenção é sobre a base de cálculo. Mas a nova regra parece híbrida.
    // Vamos seguir a lógica: se bruto <= 5000, isento.

    if (grossIncome <= 5000.00) {
        console.log("Rendimento bruto <= 5000. Isento.");
        return 0;
    }

    // Cálculo do IRRF Base (Alíquota de 27,5% com dedução ajustada de R$ 908,73)
    let irTax = (baseCalculation * 0.275) - 908.73;
    console.log(`IR Base (27.5% - 908.73): R$ ${irTax.toFixed(2)}`);

    // 2. Redutor Adicional para faixa R$ 5.000,01 a R$ 7.350,00
    if (grossIncome <= 7350.00) {
        // Fórmula do Redutor: 978,61 – (0,133145 × Rendimento Tributável)
        const redutor = 978.61 - (0.133145 * grossIncome);
        console.log(`Redutor Calculado: 978.61 - (0.133145 * ${grossIncome.toFixed(2)}) = ${redutor.toFixed(2)}`);
        
        // Aplica o redutor se for positivo
        if (redutor > 0) {
            irTax = irTax - redutor;
            console.log(`IR após redutor: R$ ${irTax.toFixed(2)}`);
        } else {
            console.log("Redutor negativo ou zero, não aplicado.");
        }
    } else {
        console.log("Rendimento bruto acima de 7350. Sem redutor.");
    }

    const finalIR = irTax > 0 ? irTax : 0;
    console.log(`IR Final: R$ ${finalIR.toFixed(2)}`);
    return finalIR;
}

// Teste do caso do usuário
// Exemplo: Rendimentos tributáveis de R$ 7.000,00
// Base (após 14%): 6020.00
console.log("TESTE 1: Caso do exemplo (Bruto 7000, Base 6020)");
calculateIRPF(6020.00, 7000.00);

// Teste com valor 6020 como BRUTO (apenas para ver o que acontece se o usuário confundiu)
console.log("\nTESTE 2: Se 6020 fosse o Bruto (e base proporcional)");
// Se bruto é 6020, base (com 14% funsema) seria ~5177.20
calculateIRPF(5177.20, 6020.00);
