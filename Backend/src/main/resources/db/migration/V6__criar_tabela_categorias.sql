CREATE TABLE categorias
(
    id      INT AUTO_INCREMENT NOT NULL,
    nome    VARCHAR(255)       NOT NULL,
    periodo SMALLINT           NULL,
    CONSTRAINT pk_categorias PRIMARY KEY (id)
);