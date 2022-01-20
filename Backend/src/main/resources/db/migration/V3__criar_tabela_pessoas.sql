CREATE TABLE pessoas
(
    id            INT AUTO_INCREMENT NOT NULL,
    nome_completo VARCHAR(75)       NOT NULL,
    telefone      VARCHAR(15)       NULL,
    email         VARCHAR(75)       NULL,
    cpf           VARCHAR(15)       NULL,
    CONSTRAINT pk_pessoas PRIMARY KEY (id)
);