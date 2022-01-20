CREATE TABLE clientes
(
    id        INT          NOT NULL,
    documento VARCHAR(20) NULL,
    CONSTRAINT pk_clientes PRIMARY KEY (id)
);

ALTER TABLE clientes
    ADD CONSTRAINT FK_CLIENTES_ON_ID FOREIGN KEY (id) REFERENCES pessoas (id);