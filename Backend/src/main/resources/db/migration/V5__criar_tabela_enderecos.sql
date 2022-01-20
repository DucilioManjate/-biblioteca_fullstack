CREATE TABLE enderecos
(
    id          INT AUTO_INCREMENT NOT NULL,
    numero      INT                NOT NULL,
    cep         VARCHAR(10)        NOT NULL,
    tipo        VARCHAR(20)        NOT NULL,
    bairro      VARCHAR(45)        NOT NULL,
    logradouro  VARCHAR(45)        NOT NULL,
    complemento VARCHAR(45)        NULL,
    viacep_url  VARCHAR(255)       NULL,
    cidade_id   INT                NOT NULL,
    cliente_id  INT                NOT NULL,
    CONSTRAINT pk_enderecos PRIMARY KEY (id)
);

ALTER TABLE enderecos
    ADD CONSTRAINT FK_ENDERECOS_ON_CIDADE FOREIGN KEY (cidade_id) REFERENCES cidades (id);

ALTER TABLE enderecos
    ADD CONSTRAINT FK_ENDERECOS_ON_CLIENTE FOREIGN KEY (cliente_id) REFERENCES clientes (id);