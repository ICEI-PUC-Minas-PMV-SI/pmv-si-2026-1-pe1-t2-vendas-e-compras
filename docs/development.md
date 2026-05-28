# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                                                           | Responsável     | Artefato Criado |
|--------|-----------------------------------------------------------------------------------------------------------------------------------|----------------|------------------|
| RF-01 | O sistema deve permitir criação de logins com usuário e senha.                                                                    | Carlos Eduardo | registrar.html   |
| RF-02 | O sistema deve permitir o usuário fazer login com seu perfil cadastrado.                                                          | Eduardo        | login.html       |
| RF-03 | O sistema deve permitir que o vendedor exclue um produto para removê-lo da listagem pública.                                      | Carlos Eduardo | perfil.html      |
| RF-04 | O sistema deve permitir a filtragem de produtos por categoria e preço.                                                            | Carlos Eduardo | index.html       |
| RF-05 | O sistema deve permitir o usuário visualizar a imagem do produto.                                                                 | Carlos Eduardo | index.html       |
| RF-07 | O sistema deve permitir que vendedores cadastrem novos produtos.                                                                  | Carlos Eduardo | publicar.html    |
| RF-08 | O sistema deve permitir que os usuários avaliem os produtos comprados.                                                            | —              | —                |
| RF-09 | O sistema deve calcular automaticamente o valor total da compra.                                                                  | Carlos Eduardo | carrinho.html    |
| RF-10 | O sistema deve permitir a edição e exclusão de produtos pelos vendedores.                                                         | Carlos Eduardo | perfil.html      |
| RF-11 | O sistema deve incluir busca de produtos por nome.                                                                                | Carlos Eduardo | index.html       |
| RF-12 | O sistema deve incluir um histórico de vendas feitas pelo vendedor.                                                               | —              | —                |
| RF-13 | O sistema deve validar se todos os campos obrigatórios (nome, preço, estado de conservação) foram preenchidos no cadastro do item.| Carlos Eduardo | publicar.html    |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

