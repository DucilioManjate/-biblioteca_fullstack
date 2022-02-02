CREATE TABLE usuario
(
    id       INT          NOT NULL,
    username VARCHAR(255) NOT NULL,
    senha    VARCHAR(255) NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id)
);

ALTER TABLE usuario
    ADD CONSTRAINT FK_USUARIO_ON_ID FOREIGN KEY (id) REFERENCES pessoas (id);