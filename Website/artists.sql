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
INSERT INTO `artist` (ID,Name) VALUES (1,"Lady Gaga");
INSERT INTO `artist` (ID,Name) VALUES (2,"Skrillex");
INSERT INTO `artist` (ID,Name) VALUES (3,"Carrie Underwood");
INSERT INTO `artist` (ID,Name) VALUES (4,"Periphery");
INSERT INTO `artist` (ID,Name) VALUES (5,"John Mayer");
INSERT INTO `artist` (ID,Name) VALUES (6,"John McCarthy");
INSERT INTO `artist` (ID,Name) VALUES (7,"John Lennon");
INSERT INTO `artist` (ID,Name) VALUES (8,"Blackmill");
INSERT INTO `artist` (ID,Name) VALUES (9,"Britney Spears");
INSERT INTO `artist` (ID,Name) VALUES (14,"Black Eye Peas");
INSERT INTO `artist` (ID,Name) VALUES (15,"Black Sabbath");
INSERT INTO `artist` (ID,Name) VALUES (16,"Britney Spears");
INSERT INTO `artist` (ID,Name) VALUES (17,"Ariana Grande");
INSERT INTO `artist` (ID,Name) VALUES (18,"Underoath");
INSERT INTO `artist` (ID,Name) VALUES (19,"Selena Gomes");
INSERT INTO `artist` (ID,Name) VALUES (20,"Killswitch Engage");
INSERT INTO `artist` (ID,Name) VALUES (21,"Madonna");
INSERT INTO `artist` (ID,Name) VALUES (22,"Wiz Khalifa");
INSERT INTO `artist` (ID,Name) VALUES (23,"Kendrick Lamar");
INSERT INTO `artist` (ID,Name) VALUES (24,"Justin Bieber");
INSERT INTO `artist` (ID,Name) VALUES (25,"Justin Timberlake");
INSERT INTO `artist` (ID,Name) VALUES (26,"One Direction");
INSERT INTO `artist` (ID,Name) VALUES (27,"Jennifer Lopez");
COMMIT;
