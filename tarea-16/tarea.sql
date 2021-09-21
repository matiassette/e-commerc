/* 1- Crear una base de datos llamada 'prueba' */
CREATE DATABASE prueba CHARACTER SET utf8;

/* 2- Crear una tabla dentro de esa base con el nombre 'items' que contenga los siguientes campos:
'nombre' del tipo varchar no nulo
'categoria' del tipo varchar no nulo
'stock' del tipo entero sin signo
'id' clave primaria autoincremental no nula
 */
CREATE TABLE items (
    nombre varchar(255) NOT NULL,
    categoria varchar(255) NOT NULL,
    stock int unsigned,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

/* 3- Insertar estos 3 registros en esa tabla
Fideos, categoría:Harina, stock:20 
Leche, categoría:Lácteos, stock:30
Crema, categoría:Lácteos, stock:15
 */
INSERT INTO items (nombre, categoria, stock) VALUES ("Fideos", "Harina", 20);
INSERT INTO items (nombre, categoria, stock) VALUES ("Leche", "Lacteos", 30);
INSERT INTO items (nombre, categoria, stock) VALUES ("Crema", "Lacteos", 15);

/* 4- Listar los registros agregados */
SELECT * FROM items

/* 5- Borrar item con id = 1 */
DELETE FROM items WHERE id = 1

/* 6- Actualizar el stock del item con id = 2 a 45 */
UPDATE items SET stock = 45 WHERE id = 2

/* 7- Listar los registros comprobando que los datos estén actualizados según las acciones realizadas. */
SELECT * FROM items