CREATE TABLE livros
(
    id           INT          NOT NULL,
    titulo       VARCHAR(255) NULL,
    resumo       TEXT         NULL,
    ano          INT          NULL,
    edicao       VARCHAR(255) NULL,
    miniatura    VARCHAR(255) NULL,
    categoria_id INT          NULL,
    editora_id   INT          NULL,
    CONSTRAINT pk_livros PRIMARY KEY (id)
);

ALTER TABLE livros
    ADD CONSTRAINT FK_LIVROS_ON_CATEGORIA FOREIGN KEY (categoria_id) REFERENCES categorias (id);

ALTER TABLE livros
    ADD CONSTRAINT FK_LIVROS_ON_EDITORA FOREIGN KEY (editora_id) REFERENCES editoras (id);

CREATE TABLE IF NOT EXISTS livros_has_areas_conhecimento (
    area_conhecimento_id INT NOT NULL,
    livro_id INT NOT NULL,
    PRIMARY KEY (area_conhecimento_id, livro_id),
    INDEX fk_area_conhecimento_has_livros_livros1_idx (livro_id ASC) VISIBLE,
    INDEX fk_area_conhecimento_has_livros_area_conhecimento1_idx (area_conhecimento_id ASC) VISIBLE,
    CONSTRAINT fk_area_conhecimento_has_livros_area_conhecimento1
    FOREIGN KEY (area_conhecimento_id) REFERENCES areas_conhecimento (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT fk_area_conhecimento_has_livros_livros1
    FOREIGN KEY (livro_id) REFERENCES livros (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS autores_has_livros (
    autor_id INT NOT NULL,
    livro_id INT NOT NULL,
    PRIMARY KEY (autor_id, livro_id),
    INDEX fk_autores_has_livros_livros1_idx (livro_id ASC) VISIBLE,
    INDEX fk_autores_has_livros_autores1_idx (autor_id ASC) VISIBLE,
    CONSTRAINT fk_autores_has_livros_autores1
    FOREIGN KEY (autor_id)
    REFERENCES autores (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT fk_autores_has_livros_livros1
    FOREIGN KEY (livro_id)
    REFERENCES livros (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);



