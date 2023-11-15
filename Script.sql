create database escola01;
use escola;
create table ALUNO(
id int UNSIGNED not null auto_increment primary key,
nome varchar(20),
email varchar(40),
enderereco varchar (60)
);

use escola;
drop database escola01;
select* from aluno