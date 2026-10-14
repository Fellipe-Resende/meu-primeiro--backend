# 🚀 Meu Primeiro Backend (Sistema de Cadastro Full-Stack)

Projeto desenvolvido para aprender e consolidar os conceitos fundamentais de integração entre **Front-end**, **Back-end (Node.js/Express)** e **Banco de Dados Relacional (PostgreSQL via Supabase)**.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3 (com Dark Mode e Animações) e JavaScript puro (`fetch` API).
- **Back-end:** Node.js, Express.js.
- **Banco de Dados:** PostgreSQL hospedado no [Supabase](https://supabase.com/) acessado via driver nativo `pg` (`node-postgres`).
- **Segurança:** Isolamento de credenciais com variáveis de ambiente (`dotenv`) e proteção via `.gitignore`.

---

## ⚙️ Funcionalidades

- [x] **Cadastro de Clientes:** Formulário interativo com validação e feedback visual.
- [x] **Integração com Banco de Dados:** Envio dos dados via requisição HTTP `POST` e gravação na nuvem.
- [x] **Redirecionamento Dinâmico:** Tela de confirmação de sucesso com exibição do ID retornado pelo Supabase.
- [x] **Listagem em Tempo Real:** Consulta e exibição de todos os registros salvos no banco de dados via rota `GET /clientes`.

---
