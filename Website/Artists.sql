-- MySQL dump 10.13  Distrib 5.1.51, for pc-linux-gnu (i686)
--
-- Host: 127.0.0.1    Database: world
-- ------------------------------------------------------
-- Server version	5.1.51-debug-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP SCHEMA IF EXISTS Artists;
CREATE SCHEMA Artists;
USE Artists;
SET AUTOCOMMIT=0;

DROP TABLE IF EXISTS `Artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Artist` (
	`ID` int(11) NOT NULL AUTO_INCREMENT,
	`Name` char(35) NOT NULL DEFAULT '',
	PRIMARY KEY (`ID`),
	KEY `Name` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


-- Dump data 
-- order by `ID`
INSERT INTO `Artist` VALUES (1,'Lady Gaga');
INSERT INTO `Artist` VALUES (2,'Skrillex');
INSERT INTO `Artist` VALUES (3,'Carrie Underwood');
INSERT INTO `Artist` VALUES (4,'Periphery');
INSERT INTO `Artist` VALUES (5,'John Mayer');
INSERT INTO `Artist` VALUES (6,'John McCarthy');
INSERT INTO `Artist` VALUES (7,'John Lennon');
INSERT INTO `Artist` VALUES (8,'Black Eye Peas');
INSERT INTO `Artist` VALUES (9,'Black Sabbath');
INSERT INTO `Artist` VALUES (10,'Blackmill');
INSERT INTO `Artist` VALUES (11,'Britney Spears');
INSERT INTO `Artist` VALUES (12,'Lady Gaga');
INSERT INTO `Artist` VALUES (13,'Carrie Underwood');
INSERT INTO `Artist` VALUES (14,'Periphery');
INSERT INTO `Artist` VALUES (15,'John Mayer');
INSERT INTO `Artist` VALUES (16,'John McCarthy');
INSERT INTO `Artist` VALUES (17,'John Lennon');
INSERT INTO `Artist` VALUES (18,'Black Eye Peas');
INSERT INTO `Artist` VALUES (19,'Black Sabbath');
INSERT INTO `Artist` VALUES (20,'Blackmill');
INSERT INTO `Artist` VALUES (21,'Britney Spears');
INSERT INTO `Artist` VALUES (22,'Ariana Grande');
INSERT INTO `Artist` VALUES (23,'Underoath');
INSERT INTO `Artist` VALUES (24,'Selena Gomes');
INSERT INTO `Artist` VALUES (25,'Killswitch Engage');
INSERT INTO `Artist` VALUES (26,'Madonna');
INSERT INTO `Artist` VALUES (27,'Wiz Khalifa');
INSERT INTO `Artist` VALUES (28,'Kendrick Lamar');
INSERT INTO `Artist` VALUES (29,'Justin Bieber');
INSERT INTO `Artist` VALUES (30,'Justin Timberlake');
INSERT INTO `Artist` VALUES (31,'One Direction');
INSERT INTO `Artist` VALUES (32,'Jennifer Lopez');
COMMIT;

SET AUTOCOMMIT=1;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed 
