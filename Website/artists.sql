DROP SCHEMA IF EXISTS artists;
CREATE SCHEMA artists;
USE artists;

DROP TABLE IF EXISTS `artist`;

CREATE TABLE `artist` (
	`ID` INT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`Name` TEXT
);


-- Dump data 
-- order by `ID`
INSERT INTO `artist` (ID,Name) VALUES (null,'Lady Gaga');
INSERT INTO `artist` (ID,Name) VALUES (null,'Skrillex');
INSERT INTO `artist` (ID,Name) VALUES (null,'Carrie Underwood');
INSERT INTO `artist` (ID,Name) VALUES (null,'Periphery');
INSERT INTO `artist` (ID,Name) VALUES (null,'John Mayer');
INSERT INTO `artist` (ID,Name) VALUES (null,'John McCarthy');
INSERT INTO `artist` (ID,Name) VALUES (null,'John Lennon');
INSERT INTO `artist` (ID,Name) VALUES (null,'Black Eye Peas');
INSERT INTO `artist` (ID,Name) VALUES (null,'Black Sabbath');
INSERT INTO `artist` (ID,Name) VALUES (null,'Blackmill');
INSERT INTO `artist` (ID,Name) VALUES (null,'Britney Spears');
INSERT INTO `artist` (ID,Name) VALUES (null,'Ariana Grande');
INSERT INTO `artist` (ID,Name) VALUES (null,'Underoath');
INSERT INTO `artist` (ID,Name) VALUES (null,'Selena Gomes');
INSERT INTO `artist` (ID,Name) VALUES (null,'Killswitch Engage');
INSERT INTO `artist` (ID,Name) VALUES (null,'Madonna');
INSERT INTO `artist` (ID,Name) VALUES (null,'Wiz Khalifa');
INSERT INTO `artist` (ID,Name) VALUES (null,'Kendrick Lamar');
INSERT INTO `artist` (ID,Name) VALUES (null,'Justin Bieber');
INSERT INTO `artist` (ID,Name) VALUES (null,'Justin Timberlake');
INSERT INTO `artist` (ID,Name) VALUES (null,'One Direction');
INSERT INTO `artist` (ID,Name) VALUES (null,'Jennifer Lopez');
INSERT INTO `artist` (ID,Name) VALUES (null,'Whitesnake');
INSERT INTO `artist` (ID,Name) VALUES (null,'Mannheim Steamroller');
INSERT INTO `artist` (ID,Name) VALUES (null,'Journey');
INSERT INTO `artist` (ID,Name) VALUES (null,'Linkin Park');
INSERT INTO `artist` (ID,Name) VALUES (null,'Survivor');
INSERT INTO `artist` (ID,Name) VALUES (null,'Coldplay');
INSERT INTO `artist` (ID,Name) VALUES (null,'Pendulum');
INSERT INTO `artist` (ID,Name) VALUES (null,'Slayer');
COMMIT;