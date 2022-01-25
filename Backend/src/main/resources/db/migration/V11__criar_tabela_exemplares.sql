CREATE TABLE exemplares
(
    id       INT AUTO_INCREMENT NOT NULL,
    status   VARCHAR(20)       NULL,
    codigo   VARCHAR(45)       NULL,
    livro_id INT                NULL,
    CONSTRAINT pk_exemplares PRIMARY KEY (id)
);

ALTER TABLE exemplares
    ADD CONSTRAINT FK_EXEMPLARES_ON_LIVRO FOREIGN KEY (livro_id) REFERENCES livros (id);