DROP TABLE IF EXISTS 'Artist';

CREATE TABLE 'Artist' (
	`ID` INT(11) NOT NULL AUTO_INCREMENT,
	`Name` VARCHAR(35) NOT NULL DEFAULT '',
	PRIMARY KEY (`ID`),
	KEY `Name` (`Name`)
);

INSERT INTO 'Artist' VALUES(1,'Lady Gaga');
INSERT INTO 'Artist' VALUES(3,'Carrie Underwood');
INSERT INTO 'Artist' VALUES(4,'Periphery');
INSERT INTO 'Artist' VALUES(5,'John Mayer');
INSERT INTO 'Artist' VALUES(6,'John McCarthy');
INSERT INTO 'Artist' VALUES(7,'John Lennon');
INSERT INTO 'Artist' VALUES(8,'Black Eye Peas');
INSERT INTO 'Artist' VALUES(9,'Black Sabbath');
INSERT INTO 'Artist' VALUES(10,'Blackmill');
INSERT INTO 'Artist' VALUES(11,'Britney Spears');
INSERT INTO 'Artist' VALUES(12,'Lady Gaga');
INSERT INTO 'Artist' VALUES(13,'Carrie Underwood');
INSERT INTO 'Artist' VALUES(14,'Periphery');
INSERT INTO 'Artist' VALUES(15,'John Mayer');
INSERT INTO 'Artist' VALUES(16,'John McCarthy');
INSERT INTO 'Artist' VALUES(17,'John Lennon');
INSERT INTO 'Artist' VALUES(18,'Black Eye Peas');
INSERT INTO 'Artist' VALUES(19,'Black Sabbath');
INSERT INTO 'Artist' VALUES(20,'Blackmill');
INSERT INTO 'Artist' VALUES(21,'Britney Spears');
INSERT INTO 'Artist' VALUES(22,'Ariana Grande');
INSERT INTO 'Artist' VALUES(23,'Underoath');
INSERT INTO 'Artist' VALUES(24,'Selena Gomes');
INSERT INTO 'Artist' VALUES(25,'Killswitch Engage');
INSERT INTO 'Artist' VALUES(26,'Madonna');
INSERT INTO 'Artist' VALUES(27,'Wiz Khalifa');
INSERT INTO 'Artist' VALUES(28,'Kendrick Lamar');
INSERT INTO 'Artist' VALUES(29,'Justin Bieber');
INSERT INTO 'Artist' VALUES(30,'Justin Timberlake');
INSERT INTO 'Artist' VALUES(31,'One Direction');
INSERT INTO 'Artist' VALUES(32,'Jennifer Lopez');
