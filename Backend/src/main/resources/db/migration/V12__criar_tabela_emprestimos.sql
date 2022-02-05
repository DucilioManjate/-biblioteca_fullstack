CREATE TABLE emprestimos
(
    id              INT AUTO_INCREMENT NOT NULL,
    status          VARCHAR(255)       NOT NULL,
    data_emprestimo datetime           NOT NULL,
    data_devolucao  datetime           NOT NULL,
    valor           DECIMAL            NOT NULL,
    multa           DECIMAL            NOT NULL,
    exemplar_id     INT                NOT NULL,
    cliente_id      INT                NOT NULL,
    livro_id        INT                NOT NULL,
    CONSTRAINT pk_emprestimos PRIMARY KEY (id)
);

ALTER TABLE emprestimos
    ADD CONSTRAINT FK_EMPRESTIMOS_ON_CLIENTE FOREIGN KEY (cliente_id) REFERENCES clientes (id);

ALTER TABLE emprestimos
    ADD CONSTRAINT FK_EMPRESTIMOS_ON_EXEMPLAR FOREIGN KEY (exemplar_id) REFERENCES exemplares (id);

ALTER TABLE emprestimos
    ADD CONSTRAINT FK_EMPRESTIMOS_ON_LIVRO FOREIGN KEY (livro_id) REFERENCES livros (id);

