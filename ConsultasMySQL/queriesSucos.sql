/*MYSQL SELEÇÃO DE ITENS*/
SELECT * FROM tbproduto;

/* SELECT UITLIZANDO COMANDO "LIKE" */
SELECT * FROM tbproduto WHERE SABOR LIKE 'u%';

/*SELECT UTILIZANDO O COMANDO "DISTICT" */
SELECT DISTINCT EMBALAGEM,TAMANHO FROM tbproduto;

/*SELECT COM LIMITE DE SAIDA*/
SELECT * FROM tbproduto LIMIT 2;

/*SELECT ORDENANDO VALORES CRESCENTE OU DECRESCENTE*/
SELECT * FROM tbproduto ORDER BY PRECO_LISTA DESC;
SELECT * FROM tbproduto ORDER BY PRECO_LISTA ;

SELECT * FROM tbproduto ORDER BY NOME;

SELECT * FROM tbproduto ORDER BY PRECO_LISTA , PRECO_LISTA DESC;
SELECT * FROM tbproduto ORDER BY PRECO_LISTA ;


/*SELECT EM UMA AGREGAÇÃO */
SELECT EMBALAGEM,SUM(PRECO_LISTA) FROM tbproduto
GROUP BY EMBALAGEM HAVING SUM(PRECO_LISTA) < 50;

/*CASOS*/
SELECT NOME,SABOR,PRECO_LISTA,
CASE 
	WHEN PRECO_LISTA > 20 THEN "PRODUTO CARO"
    WHEN PRECO_LISTA > 10 AND PRECO_LISTA <=20 THEN "PRODUTO EM CONTA"
    WHEN PRECO_LISTA < 10 AND PRECO_LISTA > 0 THEN "PRODUTO BARATO"
    ELSE "VALOR INVALIDO" 
END AS STATUS_PRECO,
AVG(PRECO_LISTA) AS PRECO_MEDIO
FROM tbproduto
GROUP BY NOME
ORDER BY PRECO_LISTA ASC;

/*SELECT COM INNER JOIN */
SELECT DISTINCT A.NOME,A.PERCENTUAL_COMISSAO,B.DATA_VENDA FROM tbvendedores A 
INNER JOIN notas_fiscais B
ON A.MATRICULA = B.MATRICULA;


/*RIGHT JOIN E LEFT JOIN*/

SELECT COUNT(*) FROM tabela_de_clientes;

SELECT CPF,COUNT(*) FROM notas_fiscais
GROUP BY CPF;

SELECT DISTINCT A.CPF,A.NOME,B.CPF AS CPF_NOTA_FISCAL  
FROM tabela_de_clientes A 
LEFT JOIN notas_fiscais B 
ON A.CPF = B.CPF;

SELECT DISTINCT A.CPF,A.NOME,B.CPF AS CPF_NOTA_FISCAL  
FROM notas_fiscais B
RIGHT JOIN tabela_de_clientes A 
ON A.CPF = B.CPF;


/*FULL JOIN E CROSS JOIN*/

SELECT * FROM tabela_de_vendedores;
SELECT * FROM tabela_de_clientes;

SELECT A.NOME AS VENDEDOR,A.BAIRRO,B.NOME AS CLIENTE,B.BAIRRO 
FROM tabela_de_vendedores A
INNER JOIN tabela_de_clientes B
ON A.BAIRRO = B.BAIRRO;

SELECT A.NOME AS VENDEDOR,A.BAIRRO,B.NOME AS CLIENTE,B.BAIRRO 
FROM tabela_de_vendedores A
LEFT JOIN tabela_de_clientes B
ON A.BAIRRO = B.BAIRRO;

SELECT A.NOME AS VENDEDOR,A.BAIRRO,B.NOME AS CLIENTE,B.BAIRRO 
FROM tabela_de_vendedores A
RIGHT JOIN tabela_de_clientes B
ON A.BAIRRO = B.BAIRRO;

/*CROSS JOIN*/
SELECT A.NOME AS VENDEDOR,A.BAIRRO,B.NOME AS CLIENTE,B.BAIRRO 
FROM tabela_de_vendedores A ,tabela_de_clientes B;

/*SUBCONSULTAS*/
SELECT DISTINCT BAIRRO FROM tabela_de_vendedores;

SELECT * FROM tabela_de_clientes 
WHERE BAIRRO IN (SELECT DISTINCT BAIRRO FROM tabela_de_vendedores);

SELECT  X.EMBALAGEM,X.PRECO_MAX FROM 
(SELECT EMBALAGEM , MAX(PRECO_DE_LISTA) AS PRECO_MAX
FROM tabela_de_produtos
GROUP BY EMBALAGEM) X WHERE PRECO_MAX < 20;

/*VIEWS*/

SELECT  X.EMBALAGEM,X.PRECO_MAX FROM 
VW_MAIORES_EMBALAGENS X WHERE PRECO_MAX < 20;

SELECT A.NOME_DO_PRODUTO,A.EMBALAGEM,A.PRECO_DE_LISTA,B.PRECO_MAX,
((A.PRECO_DE_LISTA / B.PRECO_MAX)-1) * 100 AS PERCENTUAL
FROM tabela_de_produtos A
INNER JOIN  VW_MAIORES_EMBALAGENS B
ON A.EMBALAGEM = B.EMBALAGEM;


/*FUNÇÕES STRING */

SELECT TRIM("   AAAAA     ") AS RESULTADO;

SELECT CONCAT("Hello" , " " , "World!!" ) as RESULTADO;

SELECT UCASE("hello world!!") as RESULTADO;

SELECT SUBSTRING("NOME-JUCA" ,6,50) AS RESULTADO;

SELECT * FROM tabela_de_clientes;

SELECT CONCAT(
NOME, " │ " ,ENDERECO_1, " - " , BAIRRO, " │ " , CIDADE , " - " , ESTADO
) AS RESULTADO 
FROM tabela_de_clientes ;


/*FUNÇÕES DE DATA*/

SELECT CURDATE();
SELECT CURRENT_TIMESTAMP();
SELECT CURRENT_TIME(); 

SELECT YEAR (CURRENT_TIMESTAMP());
SELECT YEAR ('2003-08-12');

Select TIMESTAMPDIFF(YEAR, '2003-08-12',CURDATE()) AS IDADE;

SELECT  DATA_VENDA,DAYNAME(DATA_VENDA) AS DIA, 
MONTHNAME(DATA_VENDA) AS MÊS, 
YEAR(DATA_VENDA) AS ANO 
FROM notas_fiscais;


SELECT * FROM tabela_de_clientes;

SELECT NOME ,TIMESTAMPDIFF(YEAR,DATA_DE_NASCIMENTO, CURDATE()) AS IDADE FROM tabela_de_clientes;



/*FUNÇÕES MATEMATICAS*/ 

SELECT CEILING(12.333) AS RESULTADO;

SELECT ROUND(12.3333) AS RESULTADO;

SELECT ROUND(15.5) AS RESULTADO;

SELECT FLOOR(15.5) AS RESULTADO;

SELECT RAND() AS NUM;

SELECT NUMERO, QUANTIDADE , PRECO, ROUND(PRECO*QUANTIDADE,2) FROM itens_notas_fiscais; 


/*ATIVIDADE */

SELECT * FROM itens_notas_fiscais;
SELECT * FROM notas_fiscais;

SELECT CODIGO_DO_PRODUTO,
CONCAT(QUANTIDADE , "  unid(s)") AS QUANTIDADE,
CONCAT("R$ ",PRECO) AS VALOR,
CONCAT(ROUND(IMPOSTO*100), "%") AS PERC_IMPOSTO,
CONCAT( "R$ " ,ROUND(QUANTIDADE*PRECO*IMPOSTO,2))AS IMPOSTO 
FROM itens_notas_fiscais I 
INNER JOIN notas_fiscais N
ON N.NUMERO = I.NUMERO
WHERE YEAR(DATA_VENDA) = 2016
;


