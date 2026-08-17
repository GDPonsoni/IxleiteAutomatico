# 🏠 Ixleite Automático - Escala de Limpeza

Webapp simples para gerenciar escalas de limpeza em república com infrações acumulativas.

## ⚡ Como Rodar

```bash
./start.sh        # Linux/Mac
start.bat         # Windows
```

No Windows, o `start.bat` tenta instalar o Node.js LTS via `winget` quando ele não está presente. Se o `winget` não estiver disponível, será necessário instalar o Node manualmente em https://nodejs.org/

Depois acesse: **http://localhost:3000**

## ✨ Funcionalidades

- ✅ Escala automática semanal com rotação
- ✅ Folgas automáticas (a cada ~3 pessoas)
- ✅ Suite members (WC Suite apenas para eles)
- ✅ Registro de infrações com acúmulo
- ✅ Histórico completo de escalas
- ✅ Edição de integrantes e cômodos
- ✅ Upload de imagens
- ✅ Logo e fundo da aplicação configuráveis
- ✅ Regras por cômodo: suíte, obrigatório/opcional, múltiplas atribuições e ordem de rotação
- ✅ Interface responsiva

## 🎯 Como Usar

1. **⚙️ Configurações**: Adicione integrantes (marque suite members) e cômodos
2. **📋 Escala Atual**: Clique "🔄 Gerar Nova Escala"
3. **❌ Infrações**: Marque infrações durante a semana
4. **📅 Histórico**: Consulte escalas anteriores

## 📊 Dados

Salvos em `backend/data/`:
- `integrantes.json` - Pessoas da república
- `comodos.json` - Tarefas/cômodos com regras por cômodo
- `config.json` - Logo, fundo e cores da interface
- `escalas.json` - Histórico de escalas
- `infracoes.json` - Registro de infrações

## 🔧 Stack

- Backend: Node.js + Express
- Frontend: HTML + CSS + JavaScript Puro
- Banco: JSON (sem dependências externas)

## 🆘 Problemas?

- **"Cannot GET /"**: Reinicie o servidor
- **Porta ocupada**: Mude em `backend/server.js`
- **Sem módulos**: `cd backend && npm install`

---

**Divirta-se!** 🎉
# IxleiteAutomatico
