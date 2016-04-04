DROP SCHEMA IF EXISTS artists;
CREATE SCHEMA artists;
USE artists;

DROP TABLE IF EXISTS `artist`;

CREATE TABLE `artist` (
	`ID` INT(20) PRIMARY KEY AUTO_INCREMENT,
	`Name` TEXT
);


-- Dump data 
-- order by `ID`
INSERT INTO `artist` (ID,Name) VALUES (1,'Lady Gaga');
INSERT INTO `artist` (ID,Name) VALUES (2,'Skrillex');
INSERT INTO `artist` (ID,Name) VALUES (3,'Carrie Underwood');
INSERT INTO `artist` (ID,Name) VALUES (4,'Periphery');
INSERT INTO `artist` (ID,Name) VALUES (5,'John Mayer');
INSERT INTO `artist` (ID,Name) VALUES (6,'John McCarthy');
INSERT INTO `artist` (ID,Name) VALUES (7,'John Lennon');
INSERT INTO `artist` (ID,Name) VALUES (8,'Black Eye Peas');
INSERT INTO `artist` (ID,Name) VALUES (9,'Black Sabbath');
INSERT INTO `artist` (ID,Name) VALUES (10,'Blackmill');
INSERT INTO `artist` (ID,Name) VALUES (11,'Britney Spears');
INSERT INTO `artist` (ID,Name) VALUES (12,'Ariana Grande');
INSERT INTO `artist` (ID,Name) VALUES (13,'Underoath');
INSERT INTO `artist` (ID,Name) VALUES (14,'Selena Gomes');
INSERT INTO `artist` (ID,Name) VALUES (15,'Killswitch Engage');
INSERT INTO `artist` (ID,Name) VALUES (16,'Madonna');
INSERT INTO `artist` (ID,Name) VALUES (17,'Wiz Khalifa');
INSERT INTO `artist` (ID,Name) VALUES (18,'Kendrick Lamar');
INSERT INTO `artist` (ID,Name) VALUES (19,'Justin Bieber');
INSERT INTO `artist` (ID,Name) VALUES (20,'Justin Timberlake');
INSERT INTO `artist` (ID,Name) VALUES (21,'One Direction');
INSERT INTO `artist` (ID,Name) VALUES (22,'Jennifer Lopez');
INSERT INTO `artist` (ID,Name) VALUES (23,'Whitesnake');
INSERT INTO `artist` (ID,Name) VALUES (24,'Mannheim Steamroller');
INSERT INTO `artist` (ID,Name) VALUES (25,'Journey');
INSERT INTO `artist` (ID,Name) VALUES (26,'Linkin Park');
INSERT INTO `artist` (ID,Name) VALUES (27,'Survivor');
INSERT INTO `artist` (ID,Name) VALUES (28,'Coldplay');
INSERT INTO `artist` (ID,Name) VALUES (29,'Pendulum');
INSERT INTO `artist` (ID,Name) VALUES (30,'Slayer');
COMMIT;