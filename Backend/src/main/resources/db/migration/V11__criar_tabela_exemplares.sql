CREATE TABLE exemplares
(
    id       INT AUTO_INCREMENT NOT NULL,
    status   VARCHAR(255)       NOT NULL,
    codigo   VARCHAR(255)       NOT NULL,
    livro_id INT                NOT NULL,
    CONSTRAINT pk_exemplares PRIMARY KEY (id)
);

ALTER TABLE exemplares
    ADD CONSTRAINT uc_exemplares_codigo UNIQUE (codigo);

ALTER TABLE exemplares
    ADD CONSTRAINT FK_EXEMPLARES_ON_LIVRO FOREIGN KEY (livro_id) REFERENCES livros (id);