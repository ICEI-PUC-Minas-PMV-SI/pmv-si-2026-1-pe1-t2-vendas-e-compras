# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                           | Responsável     | Artefato Criado |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|----------------|------------------|
| RF-01 | O sistema deve permitir criação de logins com usuário e senha.                                                                    | Carlos Eduardo | registrar.html   |
| RF-02 | O sistema deve permitir o usuário fazer login com seu perfil cadastrado.                                                          | Eduardo        | login.html       |
| RF-03 | O sistema deve permitir que o vendedor marque um produto como "Vendido" para removê-lo da listagem pública.                      | —              | —                |
| RF-04 | O sistema deve permitir a filtragem de produtos por categoria e preço.                                                            | —              | —                |
| RF-05 | O sistema deve permitir o usuário visualizar a imagem do produto.                                                                 | Carlos Eduardo | index.html       |
| RF-07 | O sistema deve permitir que vendedores cadastrem novos produtos.                                                                  | Carlos Eduardo | publicar.html    |
| RF-08 | O sistema deve permitir que os usuários avaliem os produtos comprados.                                                            | —              | —                |
| RF-09 | O sistema deve calcular automaticamente o valor total da compra.                                                                  | —              | —                |
| RF-10 | O sistema deve permitir a edição e exclusão de produtos pelos vendedores.                                                         | —              | —                |
| RF-11 | O sistema deve incluir busca de produtos por nome.                                                                                | —              | —                |
| RF-12 | O sistema deve incluir um histórico de vendas feitas pelo vendedor.                                                               | —              | —                |
| RF-13 | O sistema deve validar se todos os campos obrigatórios (nome, preço, estado de conservação) foram preenchidos no cadastro do item. | —              | —                |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

