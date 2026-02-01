# 🏛️ Simulador de Contracheque - Servidor Público

> 🎯 **Calculadora moderna e interativa para contracheques de Guardas Municipais**

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Versão](https://img.shields.io/badge/Versão-2.0-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Sistema web desenvolvido para simular e calcular contracheques de servidores públicos, especificamente **Guardas Municipais**. A aplicação realiza cálculos precisos de vencimentos, gratificações, benefícios e descontos, gerando um contracheque detalhado e profissional.

### ✨ Características Principais

- 🧮 **Cálculos Automáticos**: FUNSEMA, IRPF, gratificações e adicionais
- 📱 **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Design Moderno**: Interface limpa com cards organizados e gradientes
- 🖨️ **Impressão Integrada**: Gere contracheques prontos para impressão
- ⚡ **Tempo Real**: Cálculos atualizados instantaneamente
- 🔧 **Sem Dependências**: Roda direto no navegador, sem instalação

## 🚀 Demo Online

🔗 **[Acesse a Demonstração](https://seu-usuario.github.io/seu-repositorio)**

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

### 📊 Tabela IRPF 2026 (Atualizada)

| Faixa de Base de Cálculo | Regra de Cálculo |
|-------------------------|------------------|
| Até R$ 5.000,00 | Isento |
| R$ 5.000,01 a R$ 7.350,00 | Aplicação de Redutor Adicional sobre o IR Base |
| Acima de R$ 7.350,00 | 27,5% - R$ 908,73 (Dedução) |

**Nota**: O redutor para a faixa intermediária é calculado decrescendo o imposto conforme a renda aumenta, zerando em R$ 7.350,00.

## 🖼️ Screenshots

<details>
<summary>🎨 Interface Principal</summary>

```
┌─────────────────────────────────────┐
│  🏛️ Simulador do Guarda - Servidor  │
│           Devops. Abranti            │
├─────────────────────────────────────┤
│  📋 Dados do Servidor               │
│  💰 Vencimentos Base                │
│  🎖️ Gratificações                   │
│  🛡️ Gratificação de Guarda         │
│  ➕ Adicionais                      │
│  📉 Descontos                       │
├─────────────────────────────────────┤
│   🧮 Calcular   🗑️ Limpar          │
└─────────────────────────────────────┘
```

</details>

<details>
<summary>📊 Contracheque Gerado</summary>

```
┌─────────────────────────────────────┐
│     📊 Contracheque Moderno         │
├─────────────────────────────────────┤
│  👤 Dados do Servidor               │
│  💰 Vencimentos Tributáveis         │
│  🎁 Benefícios                      │
│  📉 Descontos                       │
│  💎 VALOR LÍQUIDO: R$ X.XXX,XX     │
│  📋 Detalhes dos Cálculos           │
├─────────────────────────────────────┤
│        🖨️ Imprimir Contracheque     │
└─────────────────────────────────────┘
```

</details>

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 5 | Estrutura da aplicação |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 3 | Estilização e responsividade |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | ES6+ | Lógica de cálculo e interatividade |

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

## 📁 Estrutura do Projeto

```
simulador-contracheque/
│
├── 📄 index.html          # Arquivo principal da aplicação
├── 📄 README.md           # Documentação do projeto
├── 📄 app.html            # Arquivo alternativo
└── 📄 LICENSE             # Licença MIT
```

## 🚀 Como Usar

### 1️⃣ **Acesso Online**
Simplesmente acesse o link da demo ou GitHub Pages

### 2️⃣ **Instalação Local**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/simulador-contracheque.git

# Entre na pasta
cd simulador-contracheque

# Abra o arquivo no navegador
# Ou use um servidor local
python -m http.server 8000
# Acesse http://localhost:8000
```

### 3️⃣ **Uso da Aplicação**
1. **Preencha** os dados do servidor
2. **Configure** salário base e percentuais
3. **Selecione** nível de gratificação de guarda
4. **Adicione** horas extras e benefícios
5. **Clique** em "Calcular Contracheque"
6. **Visualize** o resultado moderno
7. **Imprima** se necessário

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### 📋 Guidelines de Contribuição
- Use commits semânticos (feat:, fix:, docs:, etc.)
- Mantenha o código limpo e comentado
- Teste suas alterações em diferentes dispositivos
- Atualize a documentação quando necessário

## 🐛 Reportar Problemas

Encontrou um bug? Tem uma sugestão? 

1. Verifique se já não existe uma **[issue similar](https://github.com/seu-usuario/seu-repositorio/issues)**
2. **[Crie uma nova issue](https://github.com/seu-usuario/seu-repositorio/issues/new)** com:
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Screenshots (se aplicável)
   - Informações do navegador/dispositivo

## 📈 Roadmap

### 🎯 Próximas Funcionalidades
- [ ] 💾 Salvar histórico de cálculos
- [ ] 📊 Gráficos de evolução salarial
- [ ] 🔄 Comparação entre diferentes cenários
- [ ] 📱 Progressive Web App (PWA)
- [ ] 🌙 Modo escuro
- [ ] 🔐 Sistema de login para múltiplos usuários
- [ ] 📤 Exportar para PDF
- [ ] 🧮 Calculadora de aposentadoria

### 🏗️ Melhorias Técnicas
- [ ] ⚡ Otimização de performance
- [ ] 🧪 Testes automatizados
- [ ] 📦 Build system (Webpack/Vite)
- [ ] 🎨 Sistema de temas customizáveis

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/seu-repositorio?style=social)
![GitHub issues](https://img.shields.io/github/issues/seu-usuario/seu-repositorio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/seu-usuario/seu-repositorio)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

MIT License

Copyright (c) 2024 Devops. Abranti

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## 🙏 Agradecimentos

- 🎨 **Inspiração de Design**: Interfaces modernas de fintech
- 📊 **Cálculos**: Baseados na legislação brasileira atual
- 🚀 **Comunidade**: Desenvolvedores que contribuíram com feedback
- 💡 **Ferramentas**: GitHub, VS Code, e comunidade open source

---

<div align="center">

**⭐ Se este projeto te ajudou, deixe uma estrela!**

**🔔 Watch este repositório para receber atualizações**

Made with ❤️ by **Devops. Abranti**

</div>

---

## 📱 QR Code para Acesso Rápido

```
█▀▀▀▀▀█ ▀▄█▀ █▀▀▀▀▀█
█ ███ █ ▀▀▀█ █ ███ █
█ ▀▀▀ █ █▄▀▄ █ ▀▀▀ █
▀▀▀▀▀▀▀ ▀ █ ▀ ▀▀▀▀▀▀▀
▀▀▀█▀▀▀ ▀▄▀▀▀▀▀█▀▀▀▀▀
  ▄▄█▀▀▀▀▀▄█▀  ▄▄█▀▀
█▀▀▀▀▀█   █▀█ █ ███ █
▀▀▀▀▀▀▀ ▀▀▀▀▀ ▀ ▀▀▀ █
```

*Escaneie para acessar diretamente no mobile*
