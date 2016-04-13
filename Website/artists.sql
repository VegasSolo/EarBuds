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
INSERT INTO `artist` (ID,Name) VALUES (null,'Selena Gomez');
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
INSERT INTO `artist` (ID,Name) VALUES (null,'Alice Cooper');
INSERT INTO `artist` (ID,Name) VALUES (null,'Steve Miller Band');
INSERT INTO `artist` (ID,Name) VALUES (null,'Bleachers');
INSERT INTO `artist` (ID,Name) VALUES (null,'Adele');
INSERT INTO `artist` (ID,Name) VALUES (null,'Ed Sheeran');
INSERT INTO `artist` (ID,Name) VALUES (null,'Mumford & Sons');
INSERT INTO `artist` (ID,Name) VALUES (null,'Bastille');
INSERT INTO `artist` (ID,Name) VALUES (null,'Johnny Cash');
INSERT INTO `artist` (ID,Name) VALUES (null,'Red Hot Chili Peppers');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Killers');
INSERT INTO `artist` (ID,Name) VALUES (null,'Foo Fighters');
INSERT INTO `artist` (ID,Name) VALUES (null,'Nicki Minaj');
INSERT INTO `artist` (ID,Name) VALUES (null,'Alt J');
INSERT INTO `artist` (ID,Name) VALUES (null,'Lorde');
INSERT INTO `artist` (ID,Name) VALUES (null,'Jack Johnson');
INSERT INTO `artist` (ID,Name) VALUES (null,'3 Doors Down');
INSERT INTO `artist` (ID,Name) VALUES (null,'Nickelback');
INSERT INTO `artist` (ID,Name) VALUES (null,'Sleep Station');
INSERT INTO `artist` (ID,Name) VALUES (null,'Pool Party');
INSERT INTO `artist` (ID,Name) VALUES (null,'Bruno Mars');
INSERT INTO `artist` (ID,Name) VALUES (null,'Maroon 5');
INSERT INTO `artist` (ID,Name) VALUES (null,'Poundmouth');
INSERT INTO `artist` (ID,Name) VALUES (null,'Bowling For Soup');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Offspring');
INSERT INTO `artist` (ID,Name) VALUES (null,'Green Day');
INSERT INTO `artist` (ID,Name) VALUES (null,'Atlas Genius');
INSERT INTO `artist` (ID,Name) VALUES (null,'Nine Days');
INSERT INTO `artist` (ID,Name) VALUES (null,'Vertical Horizon');
INSERT INTO `artist` (ID,Name) VALUES (null,'Tom Petty');
INSERT INTO `artist` (ID,Name) VALUES (null,'Lynyrd Skynyrd');
INSERT INTO `artist` (ID,Name) VALUES (null,'Styx');
INSERT INTO `artist` (ID,Name) VALUES (null,'Queen');
INSERT INTO `artist` (ID,Name) VALUES (null,'Pink Floyd');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Rolling Stones');
INSERT INTO `artist` (ID,Name) VALUES (null,'Walk The Moon');
INSERT INTO `artist` (ID,Name) VALUES (null,'Fitz & The Tantrums');
INSERT INTO `artist` (ID,Name) VALUES (null,'Blink-182');
INSERT INTO `artist` (ID,Name) VALUES (null,'Fun');
INSERT INTO `artist` (ID,Name) VALUES (null,'Train');
INSERT INTO `artist` (ID,Name) VALUES (null,'Phillip Phillips');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Beatles');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Monkeys');
INSERT INTO `artist` (ID,Name) VALUES (null,'Of Monsters and Men');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Goo Goo Dolls');
INSERT INTO `artist` (ID,Name) VALUES (null,'Shawn Hook');
INSERT INTO `artist` (ID,Name) VALUES (null,'Jessie J');
INSERT INTO `artist` (ID,Name) VALUES (null,'Eminem');
INSERT INTO `artist` (ID,Name) VALUES (null,'Rihanna');
INSERT INTO `artist` (ID,Name) VALUES (null,'Michael Jackson');
INSERT INTO `artist` (ID,Name) VALUES (null,'Elvis Presley');
INSERT INTO `artist` (ID,Name) VALUES (null,'Cher');
INSERT INTO `artist` (ID,Name) VALUES (null,'Taylor Swift');
INSERT INTO `artist` (ID,Name) VALUES (null,'Jay-Z');
INSERT INTO `artist` (ID,Name) VALUES (null,'Alicia Keys');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Pussycat Dolls');
INSERT INTO `artist` (ID,Name) VALUES (null,'Nelly');
INSERT INTO `artist` (ID,Name) VALUES (null,'Lil Jon');
INSERT INTO `artist` (ID,Name) VALUES (null,'50 Cent');
INSERT INTO `artist` (ID,Name) VALUES (null,'Baby Bash');
INSERT INTO `artist` (ID,Name) VALUES (null,'Lil Wayne');
INSERT INTO `artist` (ID,Name) VALUES (null,'Pretty Ricky');
INSERT INTO `artist` (ID,Name) VALUES (null,'E-40');
INSERT INTO `artist` (ID,Name) VALUES (null,'J-Kwon');
INSERT INTO `artist` (ID,Name) VALUES (null,'T.I.');
INSERT INTO `artist` (ID,Name) VALUES (null,'Drake');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Weeknd');
INSERT INTO `artist` (ID,Name) VALUES (null,'Kanye West');
INSERT INTO `artist` (ID,Name) VALUES (null,'David Guetta');
INSERT INTO `artist` (ID,Name) VALUES (null,'AC/DC');
INSERT INTO `artist` (ID,Name) VALUES (null,'Aerosmith');
INSERT INTO `artist` (ID,Name) VALUES (null,'Kevin Gates');
INSERT INTO `artist` (ID,Name) VALUES (null,'Diplo');
INSERT INTO `artist` (ID,Name) VALUES (null,'Tyga');
INSERT INTO `artist` (ID,Name) VALUES (null,'Eagles');
INSERT INTO `artist` (ID,Name) VALUES (null,'Paramore');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Script');
INSERT INTO `artist` (ID,Name) VALUES (null,'Three Days Grace');
INSERT INTO `artist` (ID,Name) VALUES (null,'Eric Clapton');
INSERT INTO `artist` (ID,Name) VALUES (null,'Rick Springfield');
INSERT INTO `artist` (ID,Name) VALUES (null,'Macklemore');
INSERT INTO `artist` (ID,Name) VALUES (null,'R. Kelly');
INSERT INTO `artist` (ID,Name) VALUES (null,'Ryan Lewis');
INSERT INTO `artist` (ID,Name) VALUES (null,'OneRepublic');
INSERT INTO `artist` (ID,Name) VALUES (null,'Five For Fighting');
INSERT INTO `artist` (ID,Name) VALUES (null,'Cascada');
INSERT INTO `artist` (ID,Name) VALUES (null,'September');
INSERT INTO `artist` (ID,Name) VALUES (null,'Taio Cruz');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Wanted');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Strokes');
INSERT INTO `artist` (ID,Name) VALUES (null,'Panic! At The Disco');
INSERT INTO `artist` (ID,Name) VALUES (null,'The Fray');
INSERT INTO `artist` (ID,Name) VALUES (null,'Young the Giant');
INSERT INTO `artist` (ID,Name) VALUES (null,'Fun');
COMMIT;

DROP SCHEMA IF EXISTS favorites;
CREATE SCHEMA favorites;

DROP TABLE IF EXISTS `favorite`;

CREATE TABLE `favorite` (
	`ID` INT(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`User` TEXT,
	`Bands` TEXT
);
