CREATE SCHEMA ;

create table usuarios(
    id serial primary key,
    nome varchar(100) not null,
    email varchar(150) unique not null,
    senha text not null

)



create table transacoes(
    id serial primary key,
    id_usuario int not null REFERENCES usuarios(id) on delete CASCADE,
    valor NUMERIC(10,2) not null,
    descricao text not null,
    tipo varchar(10) not null DEFAULT 'saida',
    local varchar (30),
    criado_em TIMESTAMP default current_timestamp
)