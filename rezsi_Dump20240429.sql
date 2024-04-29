CREATE DATABASE  IF NOT EXISTS `rezsi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rezsi`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: rezsi
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `electricity`
--

DROP TABLE IF EXISTS `electricity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `electricity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `value` int DEFAULT NULL,
  `daily_average` int DEFAULT NULL,
  `intervall_length` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `electricity`
--

LOCK TABLES `electricity` WRITE;
/*!40000 ALTER TABLE `electricity` DISABLE KEYS */;
INSERT INTO `electricity` VALUES (1,'2020-08-27',5410,NULL,NULL),(2,'2020-10-15',5624,4,49),(3,'2020-11-10',5858,9,26),(4,'2020-12-08',6082,8,28),(5,'2020-12-14',6133,9,6),(6,'2021-01-01',6296,9,18),(7,'2021-01-08',6356,9,7),(8,'2021-01-12',6386,8,4),(9,'2021-01-13',6396,10,1),(10,'2021-01-14',6415,19,1),(11,'2021-01-15',6427,12,1),(12,'2021-01-16',6440,13,1),(13,'2021-01-17',6450,10,1),(14,'2021-01-18',6458,8,1),(15,'2021-01-19',6470,12,1),(16,'2021-01-20',6484,14,1),(17,'2021-01-22',6502,9,2),(18,'2021-01-24',6521,10,2),(19,'2021-01-25',6528,7,1),(20,'2021-01-27',6548,10,2),(21,'2021-01-28',6556,8,1),(22,'2021-01-29',6566,10,1),(23,'2021-02-02',6609,11,4),(24,'2021-02-03',6618,9,1),(25,'2021-02-05',6640,11,2),(26,'2021-02-07',6661,11,2),(27,'2021-02-08',6673,12,1),(28,'2021-02-09',6681,8,1),(29,'2021-02-10',6687,6,1),(30,'2021-02-11',6698,11,1),(31,'2021-02-12',6709,11,1),(32,'2021-02-13',6722,13,1),(33,'2021-02-14',6730,8,1),(34,'2021-02-15',6737,7,1),(35,'2021-02-16',6748,11,1),(36,'2021-02-17',6759,11,1),(37,'2021-02-18',6766,7,1),(38,'2021-02-22',6800,9,4),(39,'2021-02-23',6813,13,1),(40,'2021-02-24',6818,5,1),(41,'2021-02-25',6830,12,1),(42,'2021-02-26',6840,10,1),(43,'2021-02-27',6846,6,1),(44,'2021-02-28',6851,5,1),(45,'2021-03-01',6862,11,1),(46,'2021-03-02',6870,8,1),(47,'2021-03-03',6878,8,1),(48,'2021-03-04',6889,11,1),(49,'2021-03-05',6894,5,1),(50,'2021-03-06',6902,8,1),(51,'2021-03-07',6918,16,1),(52,'2021-03-09',6933,8,2),(53,'2021-03-11',6947,7,2),(54,'2021-03-13',6969,11,2),(55,'2021-03-15',6984,8,2),(56,'2021-03-16',6995,11,1),(57,'2021-03-17',7004,9,1),(58,'2021-03-19',7016,6,2),(59,'2021-03-20',7022,6,1),(60,'2021-03-24',7053,8,4),(61,'2021-03-26',7069,8,2),(62,'2021-03-29',7089,7,3),(63,'2021-04-02',7115,7,4),(64,'2021-04-09',7168,8,7),(65,'2021-04-12',7184,5,3),(66,'2021-04-27',7291,7,15),(67,'2021-04-28',7296,5,1),(68,'2021-05-02',7323,7,4),(69,'2021-05-05',7341,6,3),(70,'2021-05-08',7368,9,3),(71,'2021-05-15',7411,6,7),(72,'2021-05-24',7470,7,9),(73,'2021-05-28',7492,6,4),(74,'2021-06-03',7537,8,6),(75,'2021-06-07',7562,6,4),(76,'2021-06-20',7643,6,13),(77,'2021-06-25',7685,8,5),(78,'2021-06-28',7696,4,3),(79,'2021-07-02',7720,6,4),(80,'2021-07-08',7751,5,6),(81,'2021-07-13',7774,5,5),(82,'2021-07-25',7843,6,12),(83,'2021-07-28',7885,14,3),(84,'2021-08-10',8016,10,13),(85,'2021-08-28',8114,5,18),(86,'2021-09-23',8265,6,26),(87,'2021-10-09',8395,8,16),(88,'2021-10-19',8472,8,10),(89,'2021-11-11',8664,8,23),(90,'2021-11-25',8814,11,14),(91,'2021-12-01',8866,9,6),(92,'2021-12-05',8907,10,4),(93,'2021-12-18',9030,9,13),(94,'2021-12-19',9040,10,1),(95,'2021-12-23',9072,8,4),(96,'2021-12-24',9086,14,1),(97,'2021-12-25',9098,12,1),(98,'2021-12-26',9107,9,1),(99,'2021-12-27',9119,12,1),(100,'2021-12-28',9130,11,1),(101,'2022-01-01',9179,12,4),(102,'2022-01-03',9198,10,2),(103,'2022-01-12',9305,12,9),(104,'2022-01-13',9315,10,1),(105,'2022-01-15',9335,10,2),(106,'2022-01-16',9354,19,1),(107,'2022-01-18',9375,11,2),(108,'2022-01-20',9390,8,2),(109,'2022-01-21',9407,17,1),(110,'2022-01-24',9432,8,3),(111,'2022-01-28',9484,13,4),(112,'2022-01-31',9513,10,3),(113,'2022-02-01',9529,16,1),(114,'2022-02-05',9563,9,4),(115,'2022-02-07',9583,10,2),(116,'2022-02-09',9597,7,2),(117,'2022-02-12',9627,10,3),(118,'2022-02-17',9669,8,5),(119,'2022-03-02',9803,10,13),(120,'2022-03-04',9820,9,2),(121,'2022-03-06',9841,11,2),(122,'2022-03-15',9896,6,9),(123,'2022-03-21',9943,8,6),(124,'2022-04-02',10045,9,12),(125,'2022-04-14',10141,8,12),(126,'2022-04-22',10171,4,8),(127,'2022-04-28',10219,8,6),(128,'2022-05-03',10251,6,5),(129,'2022-05-23',10400,7,20),(130,'2022-06-01',10467,7,9),(131,'2022-06-09',10537,9,8),(132,'2022-07-14',10756,6,35),(133,'2022-07-22',10807,6,8),(134,'2022-07-25',10824,6,3),(135,'2022-08-25',11062,8,31),(136,'2022-09-05',11142,7,11),(137,'2022-09-16',11213,6,11),(138,'2022-09-24',11282,9,8),(139,'2022-09-25',11286,4,1),(140,'2022-10-02',11350,9,7),(141,'2022-10-06',11377,7,4),(142,'2022-10-15',11450,8,9),(143,'2022-10-18',11468,6,3),(144,'2022-10-21',11487,6,3),(145,'2022-10-24',11518,10,3),(146,'2022-10-30',11563,8,6),(147,'2022-11-01',11568,3,2),(148,'2022-11-09',11631,8,8),(149,'2022-11-16',11689,8,7),(150,'2022-11-21',11732,9,5),(151,'2022-11-23',11748,8,2),(152,'2022-11-29',11800,9,6),(153,'2022-12-03',11838,10,4),(154,'2022-12-06',11867,10,3),(155,'2022-12-08',11881,7,2),(156,'2022-12-13',11924,9,5),(157,'2022-12-19',11977,9,6),(158,'2022-12-24',12039,12,5),(159,'2022-12-29',12063,5,5),(160,'2023-01-04',12121,10,6),(161,'2023-01-10',12182,10,6),(162,'2023-01-13',12214,11,3),(163,'2023-01-23',12303,9,10),(164,'2023-01-28',12347,9,5),(165,'2023-01-31',12374,9,3),(166,'2023-02-02',12399,13,2),(167,'2023-02-09',12467,10,7),(168,'2023-02-22',12584,9,13),(169,'2023-03-08',12713,9,14),(170,'2023-03-19',12819,10,11),(171,'2023-03-23',12855,9,4),(172,'2023-04-07',12984,9,15),(173,'2023-04-27',13130,7,20),(174,'2023-10-03',14391,8,159),(175,'2023-11-22',14833,9,50),(176,'2023-12-05',14968,10,13),(177,'2023-12-29',15193,9,24);
/*!40000 ALTER TABLE `electricity` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `electricity_BEFORE_INSERT` BEFORE INSERT ON `electricity` FOR EACH ROW BEGIN
 DECLARE prev_value INT;
    DECLARE prev_date DATE;
    
    SELECT value, date INTO prev_value, prev_date
    FROM electricity
    WHERE date < NEW.date
    ORDER BY date DESC
    LIMIT 1;

    IF prev_value IS NOT NULL THEN
        SET NEW.daily_average = (NEW.value - prev_value) / DATEDIFF(NEW.date, prev_date);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `electricity_BEFORE_INSERT_1` BEFORE INSERT ON `electricity` FOR EACH ROW BEGIN
    DECLARE prev_date DATE;

    -- Keresd meg az utolsó beszúrt rekord dátumát
    SELECT MAX(date) INTO prev_date FROM electricity;

    -- Számold ki az intervallum hosszát napokban, ha van előző rekord
    IF prev_date IS NOT NULL THEN
        SET NEW.intervall_length = DATEDIFF(NEW.date, prev_date);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `gas`
--

DROP TABLE IF EXISTS `gas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `value` int DEFAULT NULL,
  `daily_average` int DEFAULT NULL,
  `intervall_length` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gas`
--

LOCK TABLES `gas` WRITE;
/*!40000 ALTER TABLE `gas` DISABLE KEYS */;
INSERT INTO `gas` VALUES (1,'2020-08-27',6294,NULL,NULL),(2,'2020-10-15',6385,2,49),(3,'2020-11-10',6507,5,26),(4,'2020-12-08',6736,8,28),(5,'2020-12-14',6787,9,6),(6,'2020-12-19',6826,8,5),(7,'2021-01-01',6931,8,13),(8,'2021-01-06',6970,8,5),(9,'2021-01-08',6988,9,2),(10,'2021-01-10',7011,12,2),(11,'2021-01-11',7023,12,1),(12,'2021-01-12',7031,8,1),(13,'2021-01-13',7042,11,1),(14,'2021-01-14',7053,11,1),(15,'2021-01-15',7064,11,1),(16,'2021-01-16',7077,13,1),(17,'2021-01-17',7089,12,1),(18,'2021-01-18',7100,11,1),(19,'2021-01-19',7111,11,1),(20,'2021-01-20',7125,14,1),(21,'2021-01-21',7134,9,1),(22,'2021-01-22',7140,6,1),(23,'2021-01-23',7149,9,1),(24,'2021-01-24',7157,8,1),(25,'2021-01-25',7164,7,1),(26,'2021-01-26',7173,9,1),(27,'2021-01-27',7183,10,1),(28,'2021-01-28',7193,10,1),(29,'2021-01-29',7204,11,1),(30,'2021-01-31',7220,8,2),(31,'2021-02-01',7231,11,1),(32,'2021-02-02',7238,7,1),(33,'2021-02-03',7250,12,1),(34,'2021-02-04',7257,7,1),(35,'2021-02-05',7264,7,1),(36,'2021-02-06',7273,9,1),(37,'2021-02-08',7286,7,2),(38,'2021-02-09',7297,11,1),(39,'2021-02-10',7305,8,1),(40,'2021-02-11',7315,10,1),(41,'2021-02-12',7327,12,1),(42,'2021-02-13',7339,12,1),(43,'2021-02-14',7349,10,1),(44,'2021-02-15',7357,8,1),(45,'2021-02-16',7367,10,1),(46,'2021-02-17',7376,9,1),(47,'2021-02-18',7386,10,1),(48,'2021-02-20',7402,8,2),(49,'2021-02-22',7418,8,2),(50,'2021-02-23',7425,7,1),(51,'2021-02-24',7431,6,1),(52,'2021-02-25',7435,4,1),(53,'2021-02-26',7440,5,1),(54,'2021-02-27',7445,5,1),(55,'2021-02-28',7450,5,1),(56,'2021-03-01',7455,5,1),(57,'2021-03-02',7461,6,1),(58,'2021-03-03',7466,5,1),(59,'2021-03-04',7472,6,1),(60,'2021-03-05',7477,5,1),(61,'2021-03-06',7485,8,1),(62,'2021-03-07',7495,10,1),(63,'2021-03-09',7507,6,2),(64,'2021-03-11',7521,7,2),(65,'2021-03-13',7534,7,2),(66,'2021-03-14',7538,4,1),(67,'2021-03-15',7545,7,1),(68,'2021-03-16',7551,6,1),(69,'2021-03-17',7560,9,1),(70,'2021-03-19',7575,8,2),(71,'2021-03-20',7582,7,1),(72,'2021-03-22',7597,8,2),(73,'2021-03-24',7611,7,2),(74,'2021-03-26',7621,5,2),(75,'2021-03-28',7634,7,2),(76,'2021-03-29',7638,4,1),(77,'2021-03-31',7647,5,2),(78,'2021-04-02',7647,0,2),(79,'2021-04-09',7694,7,7),(80,'2021-04-12',7707,4,3),(81,'2021-04-20',7746,5,8),(82,'2021-04-27',7778,5,7),(83,'2021-04-28',7782,4,1),(84,'2021-05-02',7789,2,4),(85,'2021-05-03',7789,0,1),(86,'2021-05-05',7795,3,2),(87,'2021-05-15',7810,2,10),(88,'2021-05-24',7820,1,9),(89,'2021-06-03',7825,1,10),(90,'2021-06-07',7827,1,4),(91,'2021-06-25',7834,0,18),(92,'2021-07-08',7838,0,13),(93,'2021-07-25',7843,0,17),(94,'2021-08-28',7855,0,34),(95,'2021-09-23',7864,0,26),(96,'2021-09-26',7867,1,3),(97,'2021-10-09',7879,1,13),(98,'2021-10-11',7889,5,2),(99,'2021-10-19',7922,4,8),(100,'2021-11-09',8016,4,21),(101,'2021-11-11',8030,7,2),(102,'2021-11-25',8121,7,14),(103,'2021-12-01',8163,7,6),(104,'2021-12-05',8193,8,4),(105,'2021-12-18',8305,9,13),(106,'2021-12-19',8317,12,1),(107,'2021-12-21',8333,8,2),(108,'2021-12-23',8356,12,2),(109,'2021-12-24',8375,19,1),(110,'2021-12-25',8385,10,1),(111,'2021-12-26',8400,15,1),(112,'2021-12-27',8413,13,1),(113,'2021-12-28',8426,13,1),(114,'2021-12-29',8443,17,1),(115,'2021-12-31',8459,8,2),(116,'2022-01-01',8466,7,1),(117,'2022-01-03',8483,9,2),(118,'2022-01-09',8532,8,6),(119,'2022-01-12',8564,11,3),(120,'2022-01-13',8574,10,1),(121,'2022-01-14',8587,13,1),(122,'2022-01-16',8613,13,2),(123,'2022-01-18',8634,11,2),(124,'2022-01-20',8647,7,2),(125,'2022-01-21',8661,14,1),(126,'2022-01-24',8692,10,3),(127,'2022-01-28',8737,11,4),(128,'2022-01-31',8762,8,3),(129,'2022-02-01',8772,10,1),(130,'2022-02-03',8789,9,2),(131,'2022-02-05',8808,10,2),(132,'2022-02-07',8830,11,2),(133,'2022-02-09',8846,8,2),(134,'2022-02-12',8875,10,3),(135,'2022-02-17',8914,8,5),(136,'2022-02-26',8980,7,9),(137,'2022-03-02',9011,8,4),(138,'2022-03-04',9028,9,2),(139,'2022-03-06',9043,8,2),(140,'2022-03-15',9110,7,9),(141,'2022-03-21',9156,8,6),(142,'2022-03-23',9168,6,2),(143,'2022-04-02',9219,5,10),(144,'2022-04-08',9260,7,6),(145,'2022-04-14',9288,5,6),(146,'2022-04-22',9306,2,8),(147,'2022-04-28',9324,3,6),(148,'2022-05-03',9332,2,5),(149,'2022-05-23',9344,1,20),(150,'2022-06-01',9348,0,9),(151,'2022-07-14',9365,0,43),(152,'2022-07-25',9368,0,11),(153,'2022-08-25',9381,0,31),(154,'2022-09-24',9397,1,30),(155,'2022-09-25',9403,6,1),(156,'2022-09-26',9407,4,1),(157,'2022-10-02',9415,1,6),(158,'2022-10-06',9422,2,4),(159,'2022-10-15',9433,1,9),(160,'2022-10-18',9439,2,3),(161,'2022-10-21',9446,2,3),(162,'2022-10-24',9457,4,3),(163,'2022-10-30',9473,3,6),(164,'2022-11-01',9479,3,2),(165,'2022-11-09',9512,4,8),(166,'2022-11-16',9546,5,7),(167,'2022-11-21',9582,7,5),(168,'2022-11-23',9598,8,2),(169,'2022-11-29',9645,8,6),(170,'2022-11-30',9653,8,1),(171,'2022-12-03',9681,9,3),(172,'2022-12-06',9706,8,3),(173,'2022-12-08',9720,7,2),(174,'2022-12-13',9765,9,5),(175,'2022-12-19',9822,10,6),(176,'2022-12-24',9870,10,5),(177,'2022-12-29',9903,7,5),(178,'2023-01-04',9948,8,6),(179,'2023-01-10',9992,7,6),(180,'2023-01-13',10020,9,3),(181,'2023-01-23',10100,8,10),(182,'2023-01-28',10145,9,5),(183,'2023-01-31',10175,10,3),(184,'2023-02-02',10196,11,2),(185,'2023-02-09',10272,11,7),(186,'2023-02-22',10385,9,13),(187,'2023-03-08',10495,8,14),(188,'2023-03-19',10567,7,11),(189,'2023-03-23',10581,4,4),(190,'2023-04-07',10671,6,15),(191,'2023-04-19',10726,5,12),(192,'2023-04-27',10746,3,8),(193,'2023-06-12',10791,1,46),(213,'2023-10-03',10826,0,113),(214,'2023-10-11',10839,2,8),(215,'2023-11-21',11012,4,41),(216,'2023-12-05',11141,9,14),(217,'2023-12-29',11342,8,24);
/*!40000 ALTER TABLE `gas` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `gas_BEFORE_INSERT` BEFORE INSERT ON `gas` FOR EACH ROW BEGIN
  DECLARE prev_value INT;
    DECLARE prev_date DATE;
    
    SELECT value, date INTO prev_value, prev_date
    FROM gas
    WHERE date < NEW.date
    ORDER BY date DESC
    LIMIT 1;

    IF prev_value IS NOT NULL THEN
        SET NEW.daily_average = (NEW.value - prev_value) / DATEDIFF(NEW.date, prev_date);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `gas_BEFORE_INSERT_1` BEFORE INSERT ON `gas` FOR EACH ROW BEGIN
    DECLARE prev_date DATE;

    -- Keresd meg az utolsó beszúrt rekord dátumát
    SELECT MAX(date) INTO prev_date FROM gas;

    -- Számold ki az intervallum hosszát napokban, ha van előző rekord
    IF prev_date IS NOT NULL THEN
        SET NEW.intervall_length = DATEDIFF(NEW.date, prev_date);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `loginID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `loginDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`loginID`),
  KEY `userID` (`userID`),
  CONSTRAINT `fk_login_users` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` tinyint NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'teszt','teszt@teszt.hu','$2b$10$LfUg6CexmAf04f.AVMwzJOe/ms5f7QSYM3Qb8HUDYPjcizJ0ZhTnO',1),(2,'teszt2','asd@asd.hu','$2b$10$smYM6QzdjRXEpPOZ1miYQehT57m9Py7t73o50bwkIa2o5A.KUhRT2',1),(3,'teszt2','trap@asd.hu','$2b$10$qApvc09VzQLAXmVsLN1PS.n321bBvb3I084yhqAgr8ZSpzJHqZOoq',1),(5,'ati','ati@vizsga.hu','$2b$10$.Tx7OUNxbalPOfDbBZ2nG.cn5rIxxvp3EoYocPMxWbQZfnfzwwKEK',1),(6,'montazsy','npisti686@gmail.com','$2b$10$..T6uBY2rLqyLe7aWz3rF.SnUbeZa9Q2lx/4UHBFMWjme54mA/i4a',1),(7,'npisti686@gmail.com','','$2b$10$CSjBcsj4/8ISfaarZPpFee0IU3sDus7ivvOy2FZE9..uXDOnvQhdW',1),(8,'q','q@q.com','$2b$10$.P1OEKVjvdJ6vd7i6lP1R.oe6KYw64jMNrMGiec0jkSncFQCRIpu2',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-29 10:26:58
