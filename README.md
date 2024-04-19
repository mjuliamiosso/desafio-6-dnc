# Desafio 6 - DNC
Desafio: Integração e modelagem de dados de um produto digital.

### Tecnologias usadas:
- Express
- MySQL

### Banco de Dados

```mysql
CREATE TABLE `clients` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
```

```mysql
CREATE TABLE `stock` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`product_id` INT(10) NOT NULL,
	`quantity` INT(10) NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `product_id` (`product_id`) USING BTREE,
	CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
```

```mysql
CREATE TABLE `product` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`price` FLOAT NOT NULL,
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
```

```mysql
CREATE TABLE `products_sales` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`sales_id` INT(10) NOT NULL,
	`product_id` INT(10) NOT NULL,
	`quantity` INT(10) NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `sales_id` (`sales_id`) USING BTREE,
	INDEX `product__id` (`product_id`) USING BTREE,
	CONSTRAINT `product__id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `sales_id` FOREIGN KEY (`sales_id`) REFERENCES `sales` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
```

```mysql
CREATE TABLE `sales` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`client_id` INT(10) NOT NULL,
	`total` FLOAT NOT NULL,
	`quantity` INT(10) NULL DEFAULT '0',
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `client_id` (`client_id`) USING BTREE,
	CONSTRAINT `client_id` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
```

### Resultado

<img src="./public/demonstracao.gif">