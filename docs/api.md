# 🔌 Referência da API REST

O backend disponibiliza uma API RESTful sob o prefixo `/api`. Todas as requisições que retornam ou enviam dados JSON utilizam o cabeçalho `Content-Type: application/json`.

---

## 👥 Integrantes (`/api/integrantes`)

| Método | Endpoint | Descrição | Corpo da Requisição (Body) / Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/integrantes` | Retorna todos os integrantes | Retorna Array de `Integrante` |
| `POST` | `/api/integrantes` | Cria um novo integrante | `{ "nome": string, "suite": boolean, "ativo": boolean }` |
| `PUT` | `/api/integrantes/:id` | Atualiza um integrante | `{ "nome": string, "suite": boolean, "ativo": boolean }` |
| `DELETE` | `/api/integrantes/:id` | Remove um integrante | Retorna `{ "success": true }` |

---

## 🚪 Cômodos / Tarefas (`/api/comodos`)

| Método | Endpoint | Descrição | Corpo da Requisição (Body) / Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/comodos` | Retorna todos os cômodos | Retorna Array de `Comodo` |
| `POST` | `/api/comodos` | Cria um novo cômodo | `{ "nome": string, "suite": boolean, "obrigatorio": boolean, "multiplas": boolean, "pessoas": number, "ordem": number }` |
| `PUT` | `/api/comodos/:id` | Atualiza dados do cômodo | Mesma estrutura do `POST` |
| `DELETE` | `/api/comodos/:id` | Remove um cômodo | Retorna `{ "success": true }` |
| `POST` | `/api/comodos/:id/imagem` | Upload da foto do cômodo | `FormData` com o campo `imagem` |

---

## 📋 Escalas (`/api/escala`)

| Método | Endpoint | Descrição | Corpo da Requisição (Body) / Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/escala` | Retorna a escala atual e histórico | `{ "atual": Escala, "historico": Escala[] }` |
| `POST` | `/api/escala/gerar` | Executa a rotação e gera nova escala | Retorna o objeto da nova `Escala` gerada |

---

## ❌ Infrações (`/api/infracoes`)

| Método | Endpoint | Descrição | Corpo da Requisição (Body) / Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/infracoes` | Retorna o registro de infrações | Retorna Array de `Infracao` |
| `POST` | `/api/infracoes` | Registra uma nova infração | `{ "integranteId": string, "descricao": string }` |
| `DELETE` | `/api/infracoes/:id` | Remove o registro de uma infração | Retorna `{ "success": true }` |

---

## 🎨 Configuração & Mídia (`/api/config`)

| Método | Endpoint | Descrição | Corpo da Requisição (Body) / Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/config` | Retorna as configurações do sistema | Retorna objeto `Config` |
| `POST` | `/api/config/logo` | Upload do logo principal | `FormData` com o campo `logo` |
| `POST` | `/api/config/background` | Upload da imagem de fundo | `FormData` com o campo `background` |
| `POST` | `/api/config/motivacao` | Upload de imagem motivacional | `FormData` com os campos `imagem` e `definirDestaque` |
| `POST` | `/api/config/cores` | Define o esquema de cores | `{ "cores": { "primaria": string, "secundaria": string, ... } }` |
| `DELETE` | `/api/config/galeria-motivacao/:filename` | Deleta imagem da galeria | Retorna `{ "success": true }` |
