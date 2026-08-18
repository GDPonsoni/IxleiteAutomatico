# 📚 Documentação do Projeto Escala

Bem-vindo à documentação oficial do **Escala**, sistema de gestão e rotação de escalas de limpeza.

A documentação está estruturada com base nos módulos e componentes reais da aplicação:

## 📁 Estrutura de Documentos

| Documento | Descrição |
| :--- | :--- |
| 🏗️ [**Arquitetura do Sistema**](file:///c:/Users/leona/escala/docs/architecture.md) | Visão geral da arquitetura, fluxo de dados, backend (Node/Express), frontend (SPA Vanilla CSS/JS) e gerenciamento de arquivos. |
| 🔌 [**Referência de APIs**](file:///c:/Users/leona/escala/docs/api.md) | Documentação completa de todas as rotas REST (`/api/integrantes`, `/api/comodos`, `/api/escala`, `/api/infracoes`, `/api/config`). |
| 🗄️ [**Modelos de Dados**](file:///c:/Users/leona/escala/docs/data-models.md) | Especificação das coleções JSON armazenadas em `backend/data/`. |
| 📖 [**Guia do Usuário**](file:///c:/Users/leona/escala/docs/user-guide.md) | Manual prático de operação: gestão de integrantes, regras de rotação, infrações e personalização visual. |
| ⚡ [**Guia Rápido**](file:///c:/Users/leona/escala/QUICK_START.md) | Guia rápido de instalação e execução inicial. |

---

## 🗺️ Mapa da Estrutura do Código

```
escala/
├── backend/
│   ├── data/
│   │   ├── comodos.json          # Lista de tarefas/cômodos e regras
│   │   ├── config.json           # Configurações de tema, logo e fundo
│   │   ├── escalas.json          # Histórico de escalas geradas
│   │   ├── infracoes.json        # Registros de faltas e infrações
│   │   ├── integrantes.json      # Lista de moradores e privilégios
│   │   └── store.js              # Módulo de acesso e IO síncrono aos JSONs
│   ├── uploads/                  # Armazenamento de mídia enviada (Multer)
│   ├── package.json              # Dependências (Express, Multer, Cors, Body-Parser)
│   └── server.js                 # Servidor HTTP, regras de negócios e endpoints REST
├── frontend/
│   ├── css/
│   │   └── style.css             # Estilos responsivos e tema com variáveis CSS
│   ├── js/
│   │   ├── app.js                # Lógica da SPA, requisições fetch e renderização
│   │   └── modal.js              # Gerenciador de modais de confirmação
│   └── index.html                # Estrutura HTML da aplicação
├── docs/                         # Documentação técnica organizada
└── README.md                     # Apresentação principal do repositório
```
