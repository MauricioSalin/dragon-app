# Desafio: Lista de dragões

Obrigado pelo interesse em participar do nosso processo seletivo. 

Leia atentamente as instruções abaixo e não hesite em entrar em contato com a gente :).

Objetivo Criar uma aplicação que contenha: Página de login: 
- Única página disponível se não estiver logado;
- Criar um usuário básico para acesso. Uma página de lista de dragões:
- Os nomes devem estar em ordem alfabética; 
- A partir da lista, deverá ser possível remover e alterar as informações dos dragões. Uma página com os detalhes de um dragão específico, os seguintes dados devem ser apresentados na página: 
  - Data de criação; 
  - Nome; 
  - Tipo. Uma página para cadastro de dragões; 

Regras: 
- Layout responsivo; 
- Utilizar React; 
- Usar um sistema de controle de versão para entregar o teste (Github, Bitbucket, ...). 
- Deve utilizar hooks (react) 

O que será avaliado: 
- Organização do código; 
- Componentização; 
- Interface organizada e amigável; 
- Uso adequado do css/sass/less. 

NÃO é permitido usar bibliotecas de estilos como: bootstrap, material design, etc. 

- API http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon
- GET .../api/v1/dragon lista de dragões
- GET .../api/v1/dragon/:id detalhes de um draão 
- POST .../api/v1/dragon criação de um dragão 
- PUT .../api/v1/dragon/:id edição de um dragão
- DELETE .../api/v1/dragon/:id deleção de um dragão 

Bom teste!

## Entrega: Observações

- Usuário e senha pode ser qualquer uma, implementado apenas o contexto salvando Token nos Cookies.
- Validação se esta ou não logado, levando para o login caso não autenticado.
- Testar limpando cookie

## O que foi utilizado
- React 18
- Vite
- Axios
- Context
- Hooks

## Funcionalidades
- Autenticação
- Gererenciamento de Cookies
- HOC para Layouts
- Listagem de dragões
- Layout Responsivo
- Lista dinâmica
- Serviços
- Integração com o back-end
- CRUD completo

Autor: @MauricioSalin
