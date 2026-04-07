# Especificações do Projeto

## Personas

| Vendedor | |
| ----------------- | | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição:** | Pessoas físicas que possuem objetos em bom estado, mas sem uso, e buscam uma forma de desapegar e gerar renda extra |
| **Necessidades:** | Facilidade para cadastrar anúncios, interface intuitiva para gerir as vendas e contato direto com possíveis compradores locais. |

| Comprador | |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição:** | Indivíduos que precisam de itens essenciais, como móveis e eletrodomésticos, mas não têm orçamento para comprar produtos novos. |
| **Necessidades:** | Acesso a uma variedade de produtos com preços reduzidos, ferramentas de busca eficientes e clareza nas informações do estado de conservação do item. |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| **Eu como …**<br><br>**\[QUEM\]** | **… quero/desejo …**<br><br>**\[O QUE\]**                    | **… para ....**<br><br>**\[PORQUE\]**                                                        |
| --------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Vendedor                          | Cadastrar fotos e descrição do meu produto usado             | Que as pessoas saibam exatamente o estado do item e eu consiga vender mais rápido.           |
| Comprador                         | Filtrar os anúncios por categoria (eletrônicos, móveis, etc) | Encontrar exatamente o que eu preciso sem perder tempo vendo anúncios que não me interessam. |
| Comprador                         | Visualizar o preço e a localização do vendedor               | Saber se o valor cabe no meu bolso e se é perto o suficiente para eu buscar o produto.       |
| Vendedor                          | Editar ou excluir o meu anúncio a qualquer momento           | Atualizar informações ou remover o item caso ele já tenha sido vendido.                      |
| Comprador                         | Salvar anúncios em uma lista de favoritos                    | Acompanhar os itens que me interessam e decidir a compra depois.                             |
| Comprador                         | Ver avaliações dos produtos                                  | Ter maior segurança na hora de comprar produtos.                                             |
| Vendedor                          | Acessar meu histórico de vendas                              | Melhorar meu desempenho como vendedor                                                        |
| Comprador                         | Acessar meu histórico de compras                             | Ter controle sobre meus gastos                                                               |
                                                           
                                      

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| **ID** | **Descrição**                                                                                                             | **Prioridade** |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------- | ----- |
| RF- 01 | O sistema deve permitir criação de logins com usuário e senha | Alto           |
| RF- 02 | O sistema deve permitir o usuário fazer login com seu perfil cadastrado                                                            | Alto  |
| RF- 03 | O sistema deve permitir que o vendedor marque um produto como "Vendido" para removê-lo da listagem pública.                        | Alto  |
| RF- 04 | O sistema deve permitir a filtragem de produtos por categoria e preço                                                              | Média |
| RF- 05 | O sistema deve permitir o usuário visualizar a imagem do produto                                                                   | Alto  |
| RF- 07 | O sistema deve permitir que vendedores cadastrem novos produtos                                                                    | Alto  |
| RF- 08 | O sistema deve permitir que os usuários avaliem os produtos comprados                                                              | Baixo |
| RF- 09 | O sistema deve calcular automaticamente o valor total da compra                                                                    | Alto  |
| RF- 10 | O sistema deve permitir a edição e exclusão de produtos pelos vendedores                                                           | Alto  |
| RF- 11 | O sistema deve incluir busca de produtos por nome                                                                                  | Alto  |
| RF- 12 | O sistema deve incluir um histórico de vendas feita pelo vendedor                                                                  | Média |
| RF- 13 | O sistema deve validar se todos os campos obrigatórios (nome, preço, estado de conservação) foram preenchidos no cadastro do item. | Alto  |


### Requisitos não Funcionais

| **ID** | **Descrição**                                                                                                               | **Prioridade** |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | -------------- |
| RNF-01 | O sistema deve estar disponível na web                                                                                      | alta           |
| RNF-02 | O sistema deve fazer validação com chave de segurança 128 bits                                                              | baixa          |
| RNF-03 | O sistema deve ser **totalmente responsivo**, adaptando-se a telas de smartphones, tablets e desktops.                      | Alta           |
| RNF-04 | O sistema deve suportar o upload de imagens de até **2MB** para evitar lentidão no carregamento da página.                  | Média          |
| RNF-05 | O sistema deve funcionar corretamente nos navegadores mais modernos (Chrome, Firefox, Edge e Safari).                       | Alta           |
| RNF-06 | O sistema deve suportar **modo offline**, permitindo a visualização de produtos já carregados anteriormente no cache local. | Baixo          |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
