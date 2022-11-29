drop database if exists aula15;
create database aula15 charset=UTF8 collate UTF8_general_ci;
use aula15;

create table profissionais(
    id_profissional integer not null primary key auto_increment,
    nome varchar(20) not null,
    especialidade varchar(20) not null
);

create table consultas(
    id_consulta integer not null primary key auto_increment,
    paciente varchar(20) not null,
    data date not null,
    horario DATETIME not null,
    id_profissional integer not null,
    foreign key (id_profissional) references profissionais(id_profissional)
);

create table tratamentos(
    id_tratamento integer not null primary key auto_increment,
    id_consulta integer not null,
    tratamento varchar(20) not null,
    valor numeric(5,2) not null,
    foreign key (id_consulta) references consultas(id_consulta)
);

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/Aula15/docs/csv/profissionais.csv'
INTO TABLE profissionais
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/Aula15/docs/csv/consultas.csv'
INTO TABLE consultas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/SUPORTE/Desktop/Aula15/docs/csv/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

drop view if exists vw_registros;
CREATE VIEW vw_registros AS
SELECT p.id_profissional,p.nome, p.especialidade, c.id_consulta, c.paciente, c.data as "DATA", c.horario as "HORÁRIO", t.id_tratamento, t.valor
FROM profissionais p INNER JOIN consultas c on p.id_profissional = c.id_profissional
INNER JOIN tratamentos t on t.id_consulta = c.id_consulta;

select * from vw_registros;


SELECT p.id_profissional,p.nome, p.especialidade, c.id_consulta, c.paciente, c.data as "DATA", c.horario as "HORÁRIO", t.id_tratamento, t.valor
FROM profissionais p INNER JOIN consultas c on p.id_profissional = c.id_profissional
INNER JOIN tratamentos t on t.id_consulta = c.id_consulta WHERE c.id_consulta = 1;


SELECT * FROM tratamentos WHERE id_tratamento = 1;