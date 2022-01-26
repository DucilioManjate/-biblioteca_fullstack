CREATE TABLE emprestimos
(
    id              INT AUTO_INCREMENT NOT NULL,
    status          VARCHAR(255)       NOT NULL,
    data_emprestimo datetime(6)        NOT NULL,
    data_devolucao  datetime(6)        NOT NULL,
    valor           DECIMAL            NOT NULL,
    multa           DECIMAL            NOT NULL,
    exemplar_id     INT                NOT NULL,
    cliente_id      INT                NOT NULL,
    CONSTRAINT pk_emprestimos PRIMARY KEY (id)
);

ALTER TABLE emprestimos
    ADD CONSTRAINT FK_EMPRESTIMOS_ON_CLIENTE FOREIGN KEY (cliente_id) REFERENCES clientes (id);

ALTER TABLE emprestimos
    ADD CONSTRAINT FK_EMPRESTIMOS_ON_EXEMPLAR FOREIGN KEY (exemplar_id) REFERENCES exemplares (id);