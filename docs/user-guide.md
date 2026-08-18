# 📖 Guia do Usuário

O **Escala** é simples e intuitivo. Este guia explica passo a passo como operar o aplicativo no dia a dia.

---

## 🚀 1. Primeiro Acesso

1. Inicie o servidor via terminal:
   ```bash
   cd backend
   npm start
   ```
2. Abra o navegador em `http://localhost:3000`.

---

## ⚙️ 2. Configurações Iniciais

Na aba **⚙️ Configurações**, configure os dados base do seu grupo:

### A. Integrantes
- Clique em **Adicionar Integrante**.
- Informe o Nome.
- Marque **"É da suíte?"** caso o integrante deva ser atribuído prioritariamente à limpeza do banheiro suíte.
- Desmarque **"Está ativo?"** se alguém estiver viajando ou ausente temporariamente.

### B. Cômodos e Tarefas
- Cadastre os cômodos da casa (ex.: *Cozinha*, *Sala*, *Lavanderia*, *Sacada*).
- Configure a quantidade de pessoas necessárias (`Quantas pessoas?`).
- Defina se o cômodo é restrito a moradores de suíte.

---

## 📋 3. Gerando e Acompanhando a Escala

1. Navegue até a aba **📋 Escala Atual**.
2. Clique no botão **🔄 Gerar Nova Escala**.
3. O sistema aplicará a rotação inteligente, distribuindo as tarefas de forma justa com base no histórico anterior.
4. Caso haja folgas calculadas, elas serão exibidas automaticamente no card correspondente.

---

## ❌ 4. Registro de Infrações

1. Caso uma tarefa não seja realizada de acordo com o combinado, acesse a aba **❌ Infrações**.
2. Selecione o integrante responsável no menu suspenso.
3. Descreva o motivo no campo de texto e clique em **Registrar Infração**.
4. O contador do integrante será incrementado e exibido no painel de resumo.

---

## 🎨 5. Personalização Visual

Na aba **⚙️ Configurações**:
- **Logo**: Envie a imagem da logo do seu grupo para personalizar o cabeçalho.
- **Fundo**: Adicione uma imagem de plano de fundo para a aplicação.
- **Esquema de Cores**: Escolha a cor primária, secundária, clara e escura utilizando o seletor de cores nativo. As alterações entram em vigor imediatamente após salvar.
