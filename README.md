# 🏠 Escala - Sistema de Escalas de Limpeza

Aplicação web intuitiva e completa para gerenciar escalas de limpeza semanais com rotação automática, regras customizadas por cômodo e registro de infrações.

## ⚡ Como Rodar

```bash
cd backend
npm install
npm start
```

Depois acesse: **http://localhost:3000**

---

## ✨ Funcionalidades Principais

- 🔄 **Escala automática semanal** com rotação justa de tarefas.
- 🛌 **Regra Suíte**: Restrição de tarefas de banheiro suíte apenas para moradores da suíte.
- ☕ **Folgas automáticas** calculadas proporcionalmente.
- ❌ **Gestão de infrações** com contador e histórico acumulativo por integrante.
- 🎨 **Personalização visual**: Upload de logo, imagem de fundo, imagem motivacional e esquemas de cores.
- 📅 **Histórico de escalas**: Consulta a escalas de semanas anteriores.

---

## 📚 Documentação Organizada

A documentação detalhada do projeto foi organizada com base nas estruturas do sistema e está disponível na pasta [`docs/`](file:///c:/Users/leona/escala/docs/README.md):

- 📌 [**Índice da Documentação**](file:///c:/Users/leona/escala/docs/README.md)
- 🏗️ [**Arquitetura do Sistema**](file:///c:/Users/leona/escala/docs/architecture.md) — Visão geral do backend Node.js/Express e frontend SPA Vanilla.
- 🔌 [**Referência de API**](file:///c:/Users/leona/escala/docs/api.md) — Documentação detalhada dos endpoints REST `/api/*`.
- 🗄️ [**Modelos de Dados**](file:///c:/Users/leona/escala/docs/data-models.md) — Estruturas dos arquivos JSON em `backend/data/`.
- 📖 [**Guia do Usuário**](file:///c:/Users/leona/escala/docs/user-guide.md) — Manual de operações e configurações.
- ⚡ [**Guia Rápido**](file:///c:/Users/leona/escala/QUICK_START.md) — Passo a passo resumido de uso.

---

## 🔧 Stack de Tecnologias

- **Backend**: Node.js + Express.js + Multer
- **Frontend**: HTML5 + CSS3 (Variáveis CSS dinâmicas) + JavaScript Vanilla
- **Banco de Dados**: JSON local (zero dependência de banco de dados externo)
