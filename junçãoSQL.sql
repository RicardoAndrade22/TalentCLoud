create database animais;
use animais;
CREATE TABLE animais (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    alimentos_id INT UNSIGNED,
    CONSTRAINT fk_alimentos
        FOREIGN KEY (alimentos_id)
        REFERENCES alimentos(id)
);

 select * from alimentos;
 select * from animais;
 
 select animais.nome, alimentos.nome from animais inner join alimentos on alimentos.id = animais.alimentos_id ;
 
 select animais.nome, alimentos.nome from animais left join alimentos on alimentos.id = animais.alimentos_id union
 select animais.nome, alimentos.nome from animais right join alimentos on alimentos.id = animais.alimentos_id;
 