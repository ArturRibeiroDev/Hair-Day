# ✂ Hair Day

Um sistema de agendamento para cabeleleiro, onde é possível visualizar, criar e cancelar atendimentos de forma simples e organizada.

---

## ✨ Funcionalidades

- 📅 Visualização de agendamentos por dia
- ⏰ Separação automática por períodos:
  - Manhã (09h - 12h)
  - Tarde (13h - 18h)
  - Noite (19h - 21h)
- ➕ Criação de novos agendamentos
- ❌ Cancelamento de agendamentos
- 🚫 Bloqueio de horários já ocupados
- 🕒 Restrição de horários:
  - Apenas entre 09:00 e 21:00
  - Horários passados são bloqueados automaticamente
- 📱 Interface simples e intuitiva

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Day.js
- JSON Server (API fake)

---

---

## ⚙️ Como funciona

### 🔄 Fluxo da aplicação

1. A aplicação carrega os agendamentos do dia atual
2. O usuário pode mudar a data para visualizar outros dias
3. Ao criar um agendamento:
   - Os dados são validados
   - O sistema verifica conflitos de horário
   - O agendamento é salvo na API
4. A lista é atualizada automaticamente
5. O usuário pode cancelar um agendamento clicando na opção de remoção

---

## 🧠 Regras de negócio

- Não é possível agendar horários já ocupados
- Horários disponíveis: **09:00 até 21:00**
- Para o dia atual:
  - Só é possível escolher horários futuros
- Para dias futuros:
  - Todos os horários estão disponíveis

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
```
### 2. Instalar dependências
```bash
npm install
```
### 3. Rodar o JSON Server
```bash
npx json-server server.json
```
### 4. Rodar o projeto
```bash
npm run dev
```

## 💡 Aprendizados

### Durante o desenvolvimento, foram praticados:

- Manipulação de DOM
- Organização de código em módulos
- Consumo de API com fetch
- Tratamento de datas com Day.js
- Eventos e interações com o usuário
- Validações e regras de negócio
- Renderização dinâmica de elementos

# 👨‍💻 Autor

- Feito por Artur Ribeiro 🚀
