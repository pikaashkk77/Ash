-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: airport
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `nameid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`nameid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'ashil','ashil123','abcde');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `arrivalflight`
--

DROP TABLE IF EXISTS `arrivalflight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arrivalflight` (
  `arr_time` varchar(20) DEFAULT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `fno` varchar(20) NOT NULL,
  `origin` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `arrdate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`fno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arrivalflight`
--

LOCK TABLES `arrivalflight` WRITE;
/*!40000 ALTER TABLE `arrivalflight` DISABLE KEYS */;
INSERT INTO `arrivalflight` VALUES ('06:15 pm','Indigo','6E808','Chennai','On-Time','2024-10-26'),('09:45 pm','American Airlines','AA3030','Los Angeles','On-Time','2024-10-26'),('10:00 pm','Emirates','AB7904','New York','On-Time','2024-10-26'),('05:15 am','Air Canada','AC1717','Toronto','On-Time','2024-10-26'),('01:00 am','Air France','AF1414','Paris','On-Time','2024-10-26'),('07:00 am','Air India','AI101','Mumbai','On-Time','2024-10-26'),('07:15 pm','AirAsia','AK2828','Bangkok','Delayed','2024-10-26'),('01:00 pm','Alaska Airlines','AS2323','Seattle','On-Time','2024-10-26'),('06:00 pm','JetBlue','B62727','Boston','On-Time','2024-10-26'),('02:15 pm','British Airways','BA505','London','On-Time','2024-10-26'),('11:30 pm','Cathay Pacific','CX1313','Hong Kong','Delayed','2024-10-26'),('02:15 pm','Delta','DL2424','Atlanta','Delayed','2024-10-26'),('09:30 am','Emirates','EK202','Dubai','On-Time','2024-10-26'),('05:00 pm','Etihad Airways','EY707','Abu Dhabi','Delayed','2024-10-26'),('07:30 pm','GoAir','G909','Bangalore','Cancelled','2024-10-26'),('04:45 pm','Hawaiian Airlines','HA2626','Honolulu','On-Time','2024-10-26'),('09:15 am','Japan Airlines','JL2020','Tokyo','Delayed','2024-10-26'),('10:15 pm','KLM','KL1212','Amsterdam','On-Time','2024-10-26'),('03:30 pm','Lufthansa','LH606','Frankfurt','On-Time','2024-10-26'),('02:30 am','Swiss Air','LX1515','Zurich','On-Time','2024-10-26'),('06:45 am','Malaysia Airlines','MH1818','Kuala Lumpur','On-Time','2024-10-26'),('10:30 am','Air New Zealand','NZ2121','Auckland','On-Time','2024-10-26'),('08:00 am','Qantas','QF1919','Sydney','On-Time','2024-10-26'),('12:45 pm','Qatar Airways','QR404','Doha','On-Time','2024-10-26'),('11:00 am','SpiceJet','SG303','Delhi','Delayed','2024-10-26'),('04:00 am','Singapore Airlines','SQ1616','Singapore','Delayed','2024-10-26'),('09:00 pm','Turkish Airlines','TK1111','Istanbul','On-Time','2024-10-26'),('08:30 pm','Scoot','TR2929','Singapore','Cancelled','2024-10-26'),('03:30 pm','United Airlines','UA2525','Chicago','On-Time','2024-10-26'),('08:45 pm','Vistara','UK1010','Kolkata','On-Time','2024-10-26'),('11:45 am','Southwest Airlines','WN2222','Dallas','On-Time','2024-10-26');
/*!40000 ALTER TABLE `arrivalflight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departureflight`
--

DROP TABLE IF EXISTS `departureflight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departureflight` (
  `dept_time` varchar(20) DEFAULT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `fno` varchar(20) NOT NULL,
  `loc` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `seats` int DEFAULT NULL,
  `deptdate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`fno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departureflight`
--

LOCK TABLES `departureflight` WRITE;
/*!40000 ALTER TABLE `departureflight` DISABLE KEYS */;
INSERT INTO `departureflight` VALUES ('07:00 am','KLM','11122','Amsterdam','On-Time',100,'2024-10-26'),('02:45 pm','Qatar Airways','11223','Doha','Cancelled',100,'2024-10-26'),('11:45 am','Alaska Airlines','11224','Seattle','On-Time',100,'2024-10-26'),('02:30 pm','JetBlue','11225','Boston','On-Time',100,'2024-10-26'),('08:30 am','Emirates','12345','London','Delayed',100,'2024-10-26'),('06:45 pm','Cathay Pacific','22233','Hong Kong','Delayed',100,'2024-10-26'),('01:30 pm','Lufthansa','22334','Frankfurt','On-Time',100,'2024-10-26'),('08:30 am','Scoot','22345','Singapore','Delayed',100,'2024-10-26'),('12:45 pm','Qantas','33444','Sydney','On-Time',100,'2024-10-26'),('06:00 am','British Airways','33445','New York','On-Time',100,'2024-10-26'),('12:00 pm','GoAir','44556','Chennai','On-Time',100,'2024-10-26'),('08:00 pm','Delta','44557','Atlanta','Delayed',100,'2024-10-26'),('11:15 am','SpiceJet','54321','Mumbai','On-Time',100,'2024-10-26'),('09:00 am','Hawaiian Airlines','55655','Honolulu','Cancelled',100,'2024-10-26'),('06:15 am','Southwest Airlines','55666','Dallas','On-Time',100,'2024-10-26'),('07:30 am','Malaysia Airlines','55677','Kuala Lumpur','Cancelled',100,'2024-10-26'),('10:00 am','Indigo','55678','Delhi','Delayed',100,'2024-10-26'),('05:30 pm','Air Canada','66543','Toronto','Delayed',100,'2024-10-26'),('09:30 am','Vistara','66554','Singapore','Cancelled',100,'2024-10-26'),('03:15 pm','United Airlines','77877','Chicago','On-Time',100,'2024-10-26'),('10:30 am','Air New Zealand','77888','Auckland','Delayed',100,'2024-10-26'),('05:45 pm','Etihad Airways','77889','Abu Dhabi','On-Time',100,'2024-10-26'),('01:00 pm','Air France','77890','Paris','On-Time',100,'2024-10-26'),('04:45 pm','AirAsia','77899','Bangkok','On-Time',100,'2024-10-26'),('04:00 pm','Singapore Airlines','88766','Singapore','On-Time',100,'2024-10-26'),('09:00 pm','Air India','98765','Dubai','On-Time',100,'2024-10-26'),('11:00 pm','Swiss Air','99887','Zurich','On-Time',100,'2024-10-26'),('01:15 pm','American Airlines','99889','Los Angeles','On-Time',100,'2024-10-26'),('03:30 pm','Turkish Airlines','99900','Istanbul','On-Time',100,'2024-10-26');
/*!40000 ALTER TABLE `departureflight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `flight` varchar(50) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `tstatus` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger`
--

LOCK TABLES `passenger` WRITE;
/*!40000 ALTER TABLE `passenger` DISABLE KEYS */;
INSERT INTO `passenger` VALUES (1,'John ','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(2,'Jane Smith Jack','janesmith@example.com','5559876543','Flight B456','Los Angeles','2024-09-18','Checked-in'),(3,'Alice Johnson','alice.j@example.com','5557654321','Flight C789','San Francisco','2024-09-20','Confirmed'),(4,'Robert Brown','rbrown@example.com','5551112222','Flight A123','Chicago','2024-09-22','Canceled'),(5,'Emily Davis','emilyd@example.com','5553334444','Flight B456','Houston','2024-09-23','Confirmed'),(6,'Michael Wilson','mwilson@example.com','5555556666','Flight D101','Miami','2024-09-25','Checked-in'),(7,'Sophia White','swhite@example.com','5557778888','Flight E202','Dallas','2024-09-28','Confirmed'),(8,'James Taylor','jtaylor@example.com','5559990000','Flight F303','Boston','2024-09-30','Checked-in'),(9,'Isabella Moore','imoore@example.com','5551236789','Flight G404','Atlanta','2024-10-02','Confirmed'),(10,'Daniel Clark','dclark@example.com','5554567890','Flight H505','Seattle','2024-10-05','Canceled'),(11,'Olivia Hall','ohall@example.com','5553216548','Flight I606','San Diego','2024-10-08','Confirmed'),(12,'Lucas Lee','llee@example.com','5557412589','Flight J707','Orlando','2024-10-10','Checked-in'),(13,'Mia Walker','mwalker@example.com','5559638527','Flight K808','Denver','2024-10-12','Confirmed'),(14,'Ethan Young','eyoung@example.com','5558523694','Flight L909','Las Vegas','2024-10-14','Checked-in'),(15,'Ava King','aking@example.com','5554561230','Flight M1010','Phoenix','2024-10-16','Confirmed'),(16,'Mason Wright','mwright@example.com','5557891234','Flight N1111','Salt Lake City','2024-10-18','Confirmed'),(17,'Charlotte Green','cgreen@example.com','5551597538','Flight O1212','Portland','2024-10-20','Checked-in'),(18,'William Baker','wbaker@example.com','5559873214','Flight P1313','Minneapolis','2024-10-22','Confirmed'),(19,'Harper Adams','hadams@example.com','5557531598','Flight Q1414','Detroit','2024-10-24','Confirmed'),(20,'Benjamin Nelson','bnelson@example.com','5552583697','Flight R1515','Philadelphia','2024-10-26','Checked-in'),(21,'Evelyn Carter','ecarter@example.com','5556547891','Flight S1616','San Antonio','2024-10-28','Confirmed'),(22,'Alexander Perez','aperez@example.com','5553219874','Flight T1717','Austin','2024-10-30','Canceled'),(23,'Amelia Turner','aturner@example.com','5557894561','Flight U1818','Columbus','2024-11-01','Confirmed'),(24,'Sebastian Scott','sscott@example.com','5559637412','Flight V1919','Kansas City','2024-11-03','Checked-in'),(25,'Abigail Mitchell','amitchell@example.com','5551478523','Flight W2020','Charlotte','2024-11-05','Confirmed'),(26,'Matthew Roberts','mroberts@example.com','5557534561','Flight X2121','Indianapolis','2024-11-07','Confirmed'),(27,'Ella Lewis','elewis@example.com','5559517532','Flight Y2222','Oklahoma City','2024-11-09','Checked-in'),(28,'Henry Thompson','hthompson@example.com','5558745123','Flight Z2323','Louisville','2024-11-11','Confirmed'),(29,'Avery Collins','acollins@example.com','5556549872','Flight AA2424','Baltimore','2024-11-13','Canceled'),(30,'Liam Ramirez','lramirez@example.com','5557891230','Flight BB2525','Cincinnati','2024-11-15','Confirmed'),(31,'John Cena','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(32,'John ','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(33,'John Doe','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(34,'John Doeyy','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(35,'John Doeyy','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed'),(36,'John ','johndoe@example.com','5551234567','Flight A123','New York','2024-09-15','Confirmed');
/*!40000 ALTER TABLE `passenger` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-24 19:53:58
