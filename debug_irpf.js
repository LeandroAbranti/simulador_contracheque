
function testIRPF(baseCalculation) {
    // Reconstruindo o cenário do usuário para entender onde está o erro.
    // Usuário diz: "simule um tributavel de 6629,47"
    // Resultado esperado pelo usuário: 822,03
    // Resultado atual do sistema: 914,37
    
    // Análise do 914,37 (Valor atual):
    // Se Base = 6629.47
    // IR = (6629.47 * 0.275) - 908.73 = 1823.10 - 908.73 = 914.37
    // Isso confirma que o sistema está aplicando a regra "padrão" SEM o redutor.
    // Por que sem o redutor? Porque o redutor depende do "Rendimento Bruto" (grossIncome).
    // Se a base é 6629.47 (após Funsema 14%), qual seria o bruto?
    // Base = Bruto * (1 - 0.14) -> Bruto = Base / 0.86
    // Bruto Estimado = 6629.47 / 0.86 = 7708.68
    // Como 7708.68 > 7350.00, o redutor NÃO é aplicado na lógica atual.
    
    // Análise do 822,03 (Valor esperado):
    // Diferença: 914.37 - 822.03 = 92.34 (Valor do Redutor esperado)
    // Se o redutor fosse aplicado:
    // Redutor = 978.61 - (0.133145 * X) = 92.34
    // 0.133145 * X = 978.61 - 92.34 = 886.27
    // X = 886.27 / 0.133145 = 6656.42
    
    // O valor X (base do redutor) parece ser muito próximo da BASE DE CÁLCULO (6629.47) e não do BRUTO.
    // Vamos testar se o redutor deve usar a BASE DE CÁLCULO (Rendimentos Sujeitos à Incidência) em vez do Bruto Total.
    
    console.log("--- TESTE DE HIPÓTESE ---");
    console.log(`Base Tributável Informada: R$ ${baseCalculation}`);
    
    // Cálculo Padrão
    let irStandard = (baseCalculation * 0.275) - 908.73;
    console.log(`IR Padrão (27.5%): R$ ${irStandard.toFixed(2)}`);
    
    // Teste 1: Redutor usando a PRÓPRIA BASE DE CÁLCULO como referência
    // "Redutor – (Coeficiente × rendimentos sujeitos à incidência de IR)"
    // Se "rendimentos sujeitos à incidência" = Base de Cálculo (após deduções legais/previdenciárias)
    
    const coeficiente = 0.133145;
    // Se usarmos a própria base 6629.47 no redutor:
    const redutorBasePropria = 978.61 - (coeficiente * baseCalculation);
    console.log(`Redutor (usando base ${baseCalculation}): 978.61 - (${coeficiente} * ${baseCalculation}) = ${redutorBasePropria.toFixed(2)}`);
    
    const irComRedutorBasePropria = irStandard - redutorBasePropria;
    console.log(`IR Final (Hipótese Base Própria): R$ ${irComRedutorBasePropria.toFixed(2)}`);
    
    // Verificando se bate com 822.03
    // 914.37 - (978.61 - (0.133145 * 6629.47))
    // 914.37 - (978.61 - 882.68)
    // 914.37 - 95.93 = 818.44 (Ainda não é exatamente 822.03, mas é muito mais próximo)
    
    // Vamos tentar entender exatamente o que é "rendimentos sujeitos à incidência de IR".
    // Normalmente é o Bruto - Deduções (INSS/Previdência).
    // O usuário disse: "Rendimentos tributáveis de R$ 7.000,00" no exemplo anterior.
    // E depois "7000 - 14% = 6020".
    // E usou 7000 no redutor.
    // Então para o exemplo anterior, ele usou o BRUTO (antes dos 14%) no redutor.
    
    // Mas agora, com 6629.47 tributável...
    // Se 6629.47 for o BRUTO (antes dos 14%):
    // Base Real = 6629.47 * 0.86 = 5701.34
    // IR Base = (5701.34 * 0.275) - 908.73 = 1567.87 - 908.73 = 659.14
    // Redutor = 978.61 - (0.133145 * 6629.47) = 978.61 - 882.68 = 95.93
    // IR Final = 659.14 - 95.93 = 563.21 (Longe de 822.03)
    
    // Então 6629.47 deve ser a BASE DE CÁLCULO (Pós-Funsema) ou o usuário está chamando de "Tributável" algo diferente.
    // Se IR esperado é 822.03.
    // IR Base (sem redutor) deve ser maior que 822.03.
    // Se IR Base fosse 914.37 (o que o sistema calculou para 6629.47), a diferença é 92.34.
    
    // Vamos tentar descobrir qual valor X gera um redutor de 92.34
    // 978.61 - (0.133145 * X) = 92.34
    // X = 6656.42
    
    // 6656.42 é muito próximo de 6629.47.
    // Diferença de ~27 reais.
    
    // Será que o "Tributável" que entra no redutor é (Base de Cálculo + Alguma coisa) ou (Bruto - Alguma coisa)?
    // Ou será que a regra de isenção/redutor mudou?
    
    // O usuário disse: "simule um tributavel de 6629,47".
    // Se ele quer dizer "Rendimento Bruto Tributável" = 6629.47.
    // Base = 6629.47 - 14% = 5701.34.
    // IR = 659.14 (Calculado acima). Longe.
    
    // CONCLUSÃO LÓGICA:
    // O usuário está inputando um valor que GERA uma Base de Cálculo de Imposto de Renda de 6629.47.
    // Para ter essa base, o Bruto seria aprox 7708.
    // E o usuário quer que o Redutor seja aplicado MESMO QUE O BRUTO SEJA 7708?
    // "Para rendimentos tributáveis entre R$ 5.000,01 e R$ 7.350,00".
    // Se o Bruto é 7708, ele estaria FORA da faixa.
    // MAS o usuário insiste que o redutor deve ser aplicado.
    
    // HIPÓTESE FORTE:
    // A variável que entra no cálculo do Redutor NÃO É O BRUTO TOTAL.
    // É a BASE DE CÁLCULO DO IR (Rendimento Bruto - Deduções Legais).
    // Ou seja: "Rendimentos sujeitos à incidência de IR" = Base de Cálculo.
    
    // Vamos retestar o EXEMPLO 1 (7000 Bruto -> 6020 Base) com essa hipótese.
    // Exemplo 1 (Usuário): "Aplicação da faixa 2 ... (0,133145 × 7.000,00)".
    // No exemplo 1, ele usou explicitamente o BRUTO (7000).
    
    // CONTRADIÇÃO:
    // Exemplo 1: Redutor usa 7000 (Bruto).
    // Exemplo 2: Redutor parece precisar usar algo próximo de 6629 (Base) para dar certo.
    
    // Vamos olhar o Exemplo 1 de novo com cuidado.
    // "Rendimentos tributáveis de R$ 7.000,00"
    // "R$ 7.000,00 - 14% = R$ 6.020,00"
    // "Redutor – (Coeficiente × rendimentos sujeitos à incidência de IR)"
    // "978,61 – (0,133145 × 7.000,00)"
    
    // Se o usuário estiver chamando de "Rendimentos tributáveis" o valor FINAL APÓS DEDUÇÕES no caso 2?
    // "simule um tributavel de 6629,47"
    // Se 6629.47 for o valor que ele considera que deve entrar no redutor.
    // E também for a base de cálculo do imposto.
    
    // Se BaseCalculo = 6629.47 e BaseRedutor = 6629.47
    // IR Base = (6629.47 * 0.275) - 908.73 = 914.37
    // Redutor = 978.61 - (0.133145 * 6629.47) = 978.61 - 882.68 = 95.93
    // IR Final = 914.37 - 95.93 = 818.44
    // Esperado: 822.03.
    // Diferença de R$ 3.59.
    
    // Essa diferença de 3.59 pode ser dependente.
    // 822.03 (Esperado) -> Redutor necessário = 92.34
    // 92.34 = 978.61 - (Coef * X)
    // Coef * X = 886.27
    // X = 6656.42
    
    // De onde vem esse 6656.42?
    // 6629.47 + 26.95?
    
    console.log("Tentativa de engenharia reversa concluída.");
}

testIRPF(6629.47);
