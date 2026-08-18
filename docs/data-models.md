# 🗄️ Modelos de Dados

O sistema **Escala** armazena todas as suas informações em formato JSON no diretório `backend/data/`. A persistência é gerenciada via `backend/data/store.js`.

---

## 👥 1. Integrantes (`backend/data/integrantes.json`)

Armazena os moradores participantes da escala.

```json
[
  {
    "id": "u1",
    "nome": "Ana",
    "suite": true,
    "ativo": true
  },
  {
    "id": "u2",
    "nome": "Bruno",
    "suite": false,
    "ativo": true
  }
]
```

### Campos:
- `id` (string): Identificador único.
- `nome` (string): Nome do integrante.
- `suite` (boolean): `true` se mora em quarto com suíte (habilita atribuição do WC Suíte).
- `ativo` (boolean): `true` se participa da rotação atual.

---

## 🚪 2. Cômodos (`backend/data/comodos.json`)

Armazena as áreas da casa e suas respectivas regras de limpeza.

```json
[
  {
    "id": "c1",
    "nome": "WC Suíte",
    "suite": true,
    "obrigatorio": true,
    "multiplas": false,
    "pessoas": 1,
    "ordem": 1,
    "imagem": "/uploads/example.png"
  }
]
```

### Campos:
- `id` (string): Identificador único.
- `nome` (string): Nome do cômodo/tarefa.
- `suite` (boolean): Restringe a tarefa apenas a integrantes da suíte.
- `obrigatorio` (boolean): Indica se a atribuição deve sempre ser preenchida.
- `multiplas` (boolean): Permite alocar múltiplos moradores na mesma tarefa.
- `pessoas` (number): Quantidade de pessoas necessárias para a tarefa.
- `ordem` (number): Peso/Ordem de precedência na rotação.
- `imagem` (string | null): Caminho da foto ilustrativa do cômodo.

---

## 📋 3. Escalas (`backend/data/escalas.json`)

Histórico e escala vigente.

```json
[
  {
    "id": "esc-12345",
    "dataInicio": "2026-08-18",
    "dataFim": "2026-08-25",
    "atribuicoes": [
      {
        "comodoId": "c1",
        "comodoNome": "Cozinha",
        "integrantes": ["Bruno"]
      }
    ]
  }
]
```

---

## ❌ 4. Infrações (`backend/data/infracoes.json`)

Registros de tarefas não cumpridas ou divergências.

```json
[
  {
    "id": "inf-9876",
    "integranteId": "u2",
    "descricao": "Não lavou a louça na terça-feira",
    "data": "2026-08-17T18:00:00.000Z"
  }
]
```

---

## 🎨 5. Configurações (`backend/data/config.json`)

Configurações de identidade visual do aplicativo.

```json
{
  "logo": "/uploads/logo.png",
  "background": "/uploads/bg.png",
  "motivacaoDestaque": "/uploads/motivation.jpg",
  "cores": {
    "primaria": "#db0037",
    "secundaria": "#ffd700",
    "branca": "#ffffff",
    "preta": "#000000"
  }
}
```
