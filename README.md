# simulador_caixa_eletronico_api
Projeto simples utilizado para desenvolver pensamento lógico (API)

Este projeto tem como objetivo mapear o GET e o PUT para consumir dados de um banco da dados SQL
Utilizei o postgres, e as configurações de conexão se encontram no arquivo config.js

Copiar e colar essas querys para criar o banco e o popular para uso:

CREATE TABLE cedulas(
    id SERIAL PRIMARY KEY,
    nome VARCHAR,
    quantia INTEGER
);

INSERT INTO cedulas (nome, quantia) VALUES
	('R$200', 0),
  ('R$100', 0),
	('R$50', 0),
	('R$20', 0),
	('R$10', 0),
	('R$5', 0),
	('R$2', 0);

Comando para rodar a API: npm run start
