# Angular
- Framework baseado em Javascript.
- TypeScript como linguagem principal.
- SPAs (Single Page Application) como foco.
- Components são a base da arquitetura.
- Estrutura organizada bem estruturada.
- Sistema De Tooling muito rico: CLI, HTTP, Router...

## Angular x React
| Angular  | X | React |
| -------  | ------- | ------- |
| Google | Mantido | Facebook |
| Framework | Definição | Library (biblioteca) |
| HTML + TS | Template | JS + JSX |
| 2 Way | Modelo Binding | Uni-Direcional |
| Regular DOM | DOM | Virtual DOM |
| Services | Controle de Estados | Flux/Redux ou context api |

## As 4 Camadas de um Web App
### Componentes
> É um elemento visual, customiazavel e reutilizavel.
### Gerenciamento de Estados
> Responsável por garantir que as informações dos componentes não estão dessincronizadas e facilitar a comunicação de um componente com outro.
Exemplo: atualizar carrinho de compras ao clicar no botão de comprar de um produto.
### Roteamento
> Responsável pela forma de navegar fazendo a troca de URL sem Recarregar a página, mudando somente os componentes que são mostrados.
### Renderização
> Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para que ele seja desenhado na janela sem complicações.
> #### tipos de Renderização
>- 100% server
>- parte server e parte client
>- 100% client