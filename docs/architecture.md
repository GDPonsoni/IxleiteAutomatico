# 🏗️ Arquitetura do Sistema

O **Escala** é construído como uma aplicação monolítica leve em camada dupla: um servidor backend Node.js que fornece endpoints REST e serve os arquivos estáticos do frontend em JavaScript Puro (Vanilla JS).

---

## 📐 Visão Geral da Arquitetura

```
+-------------------------------------------------------+
|                    Navegador Client                   |
|  (index.html + style.css + app.js + modal.js)        |
+---------------------------+---------------------------+
                            |
                     HTTP / JSON / REST
                            |
+---------------------------v---------------------------+
|                   Backend Node.js                     |
|                      (server.js)                      |
|                                                       |
|  +-------------------+        +--------------------+  |
|  | Express Router    |        | Multer File Upload |  |
|  +---------+---------+        +---------+----------+  |
|            |                            |             |
|  +---------v---------+        +---------v----------+  |
|  |   Store Layer     |        |   uploads/ Dir     |  |
|  |   (store.js)      |        +--------------------+  |
|  +---------+---------+                                |
+------------|------------------------------------------+
             |
   +---------v---------+
   |   data/*.json     |
   +-------------------+
```

---

## ⚙️ Backend Layer

- **Runtime**: Node.js com suporte nativo a ES Modules (`"type": "module"`).
- **Framework Web**: Express.js rodando por padrão na porta `3000` (ou variável de ambiente `PORT`).
- **Persistência de Dados**:
  - Implementada através da classe `JsonStore` em `backend/data/store.js`.
  - Operações de leitura e escrita utilizam manipulação síncrona com mecanismo de backup automatizado para prevenção de corrupção.
- **Upload de Mídia**:
  - Middleware `multer` configurado para armazenamento em `backend/uploads/`.
  - Validação de extensões (`png`, `jpeg`, `webp`, `gif`) e limitação de tamanho até 5MB por upload.

### Algoritmo de Geração da Escala Semana (`server.js`)
1. **Filtro de Ativos**: Considera apenas integrantes ativos (`ativo: true`).
2. **Separação por Categoria**:
   - Membros de Suíte (`suite: true`).
   - Demais integrantes.
3. **Ordenação de Cômodos**: Cômodos são organizados pelo campo `ordem` e pelo campo `nome`.
4. **Calculadora de Atribuição**:
   - Respeita o limite de pessoas por cômodo (`pessoas`).
   - Garante que a tarefa de **WC Suíte** seja estritamente atribuída a integrantes marcados como `suite: true`.
   - Aplica rotação circular incremental baseada nas escalas passadas para impedir repetição contínua da mesma tarefa pela mesma pessoa.

---

## 🎨 Frontend Layer

- **Single Page Application (SPA)**: Estrutura HTML única com navegação por abas gerenciadas em JavaScript sem recarregamento de página.
- **Estilização Dinâmica**:
  - Vanilla CSS com variáveis de cor CSS dinâmicas (`--primary-color`, `--secondary-color`, etc.).
  - As cores configuradas na aba de configurações são aplicadas dinamicamente via `style.setProperty()`.
- **Mapeamento de Abas**:
  - `escala`: Visualização da semana atual e botão de acionamento do gerador.
  - `historico`: Linha do tempo das escalas passadas.
  - `infracoes`: Resumo e formulário de adição de infrações.
  - `config`: Gerenciamento de integrantes, cômodos, imagens e paleta de cores.
