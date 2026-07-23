# School System API

API CRUD simples para gerenciar estudantes e professores em memória usando Express e TypeScript.

## Visão geral

- Backend em `Express` com `TypeScript`
- Dados armazenados em mocks na memória (`src/mocks`)
- Rotas para `students` e `teachers`
- Validações básicas e tratamento de erro centralizado

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

A aplicação será executada em `http://localhost:3333` por padrão.

## Estrutura de pastas

- `src/server.ts` - configuração do servidor Express
- `src/routes` - definição das rotas para estudantes e professores
- `src/controllers` - controladores que recebem a requisição e devolvem a resposta
- `src/services` - lógica de negócio e operações CRUD sobre os dados em memória
- `src/mocks` - dados mockados de estudantes e professores
- `src/errors` - classes de erro personalizadas
- `src/middlewares` - middlewares de tratamento de erro, rota não encontrada e logger
- `src/types.ts` - tipagem TypeScript para estudantes e professores

## Endpoints

### Students

- `GET /students`
  - Retorna todos os estudantes
- `GET /students/:id`
  - Retorna o estudante pelo `id`
- `POST /students`
  - Cria um estudante
  - Corpo esperado:
    ```json
    {
      "name": "Nome do estudante",
      "email": "email@exemplo.com",
      "matricula": "123456"
    }
    ```
- `PUT /students/:id`
  - Atualiza um estudante existente
  - Corpo possível:
    ```json
    {
      "name": "Novo nome",
      "email": "novoemail@exemplo.com",
      "matricula": "654321",
      "turma": "fs-57"
    }
    ```
- `DELETE /students/:id`
  - Remove um estudante

### Teachers

- `GET /teachers`
  - Retorna todos os professores
- `GET /teachers/:id`
  - Retorna o professor pelo `id`
- `POST /teachers`
  - Cria um professor
  - Corpo esperado:
    ```json
    {
      "name": "Nome do professor",
      "email": "email@exemplo.com",
      "cod_rp": "RP1234"
    }
    ```
- `PUT /teachers/:id`
  - Atualiza um professor existente
  - Corpo possível:
    ```json
    {
      "name": "Novo nome",
      "email": "novoemail@exemplo.com",
      "cod_rp": "RP4321",
      "turma": "fs-57"
    }
    ```
- `DELETE /teachers/:id`
  - Remove um professor

## Erros

- `404` quando estudante ou professor não é encontrado
- `500` para erros internos do servidor

## Observações

- Os dados são temporários e perdidos ao reiniciar o servidor
- O projeto usa `type: module` no `package.json`
