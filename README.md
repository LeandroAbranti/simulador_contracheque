# 🏛️ Simulador de Contracheque - Servidor Público

🎯 **Calculadora moderna e interativa para contracheques de Guardas Municipais**

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Versão](https://img.shields.io/badge/Versão-2.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow)

## 📋 Sobre o Projeto

Sistema web desenvolvido para simular e calcular contracheques de servidores públicos, especificamente Guardas Municipais. A aplicação realiza cálculos precisos de vencimentos, gratificações, benefícios e descontos, gerando um contracheque detalhado e profissional.

## ✨ Características Principais

- 🧮 **Cálculos Automáticos**: FUNSEMA, IRPF, gratificações e adicionais
- 📱 **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Design Moderno**: Interface limpa com cards organizados e gradientes
- 🖨️ **Impressão Integrada**: Gere contracheques prontos para impressão
- ⚡ **Tempo Real**: Cálculos atualizados instantaneamente
- 🔧 **Sem Dependências**: Roda direto no navegador, sem instalação

## 🎯 Funcionalidades

### 💰 Cálculo de Vencimentos

- **Salário Base**: Valor base do servidor
- **Risco de Vida**: 30% automático sobre salário base
- **GTS**: Gratificação por Tempo de Serviço (percentual configurável)
- **Gratificação de Guarda**: Níveis II, III, IV e V com percentuais específicos
- **Função Gratificada**: Valor fixo de R$ 1.270,00 (tributável para IRPF)
- **Horas Extras**: Valores adicionais
- **Balada Segura**: R$ 304,75 por unidade

### 🎁 Benefícios

- **Vale Alimentação**: R$ 650,00 + R$ 33,00 por cada Balada Segura (cálculo automático)
- **Vale Transporte**: Com desconto automático

### 📉 Descontos Automáticos

- **FUNSEMA**: 14% sobre base específica (Salário Base + Risco de Vida + GTS + Gratificação de Guarda)
- **IRPF**: Cálculo por faixas de renda (inclui Função Gratificada na base)
- **Plano de Saúde**: Valor personalizado
- **Outros Descontos**: Campo flexível

## ⚙️ Configurações Específicas

### 🎖️ Níveis de Gratificação de Guarda

| Nível | Percentual | Aplicação |
|-------|------------|----------|
| II    | 5,00%      | Sobre salário base |
| III   | 10,25%     | Sobre salário base |
| IV    | 15,76%     | Sobre salário base |
| V     | 21,55%     | Sobre salário base |

### 📊 Tabela IRPF 2024

| Faixa Salarial | Alíquota | Parcela a Deduzir |
|----------------|----------|------------------|
| Até R$ 2.259,20 | Isento | - |
| R$ 2.259,21 a R$ 2.826,65 | 7,5% | R$ 170,00 |
| R$ 2.826,66 a R$ 3.751,05 | 15% | R$ 381,44 |
| R$ 3.751,06 a R$ 4.663,99 | 22,5% | R$ 663,00 |
| Acima de R$ 4.664,00 | 27,5% | R$ 896,00 |

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML | 5 | Estrutura da aplicação |
| CSS | 3 | Estilização e responsividade |
| JavaScript | ES6+ | Lógica de cálculo e interatividade |

## 🚀 Como Usar

### 1️⃣ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/simulador-contracheque.git

# Entre na pasta
cd simulador-contracheque

# Use um servidor local
python -m http.server 8000
# Acesse http://localhost:8000
```

### 2️⃣ Uso da Aplicação

1. Preencha os dados do servidor
2. Configure salário base e percentuais
3. Selecione nível de gratificação de guarda
4. Adicione horas extras e benefícios
5. Clique em "Calcular Contracheque"
6. Visualize o resultado moderno
7. Imprima se necessário

## 📁 Estrutura do Projeto

```
simulador-contracheque/
│
├── 📄 index.html          # Arquivo principal da aplicação
├── 📄 README.md           # Documentação do projeto
└── 📄 app.html            # Arquivo alternativo
```

## 🎨 Recursos de Design

- **Gradientes CSS**: Visual moderno e atrativo
- **Flexbox/Grid**: Layout responsivo
- **Transições**: Animações suaves
- **Box Shadow**: Profundidade visual
- **Tipografia**: Segoe UI para legibilidade

## 🔄 Atualizações Recentes

### Versão 2.0
- ✅ Adicionado campo "Função Gratificada" (R$ 1.270,00)
- ✅ Vale Alimentação automático baseado em Baladas Seguras
- ✅ Valor da Balada Segura atualizado para R$ 304,75
- ✅ Correção no cálculo do FUNSEMA (base específica)
- ✅ Interface aprimorada com cálculos em tempo real

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

**Devops. Abranti**

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
