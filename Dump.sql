CREATE DATABASE  IF NOT EXISTS `part` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `part`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: part
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `customer` 
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerID` int NOT NULL,
  `SSN_C` varchar(12) NOT NULL,
  `InsuranceProvider` varchar(45) DEFAULT NULL,
  `ReasonForVisit` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`),
  UNIQUE KEY `SSN_C_UNIQUE` (`SSN_C`),
  UNIQUE KEY `CustomerID_UNIQUE` (`CustomerID`),
  CONSTRAINT `SSN_C` FOREIGN KEY (`SSN_C`) REFERENCES `person` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'123-65-5362',NULL,NULL),(2,'243-08-9038','Red','Sick'),(3,'585-78-6392','blue','mom');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drug_info`
--

DROP TABLE IF EXISTS `drug_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drug_info` (
  `DrugID` int NOT NULL,
  `ManufacturerID_D` int NOT NULL,
  `DrugName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`DrugID`),
  UNIQUE KEY `DrugID_UNIQUE` (`DrugID`),
  KEY `ManufacturerID_D_idx` (`ManufacturerID_D`),
  CONSTRAINT `ManufacturerID_D` FOREIGN KEY (`ManufacturerID_D`) REFERENCES `drug_inventory` (`ManufacturerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drug_info`
--

LOCK TABLES `drug_info` WRITE;
/*!40000 ALTER TABLE `drug_info` DISABLE KEYS */;
INSERT INTO `drug_info` VALUES (1,66,'glucose'),(2,77,'tylenol'),(3,66,'ibu');
/*!40000 ALTER TABLE `drug_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drug_inventory`
--

DROP TABLE IF EXISTS `drug_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drug_inventory` (
  `Amount` int NOT NULL,
  `ManufacturerID` int NOT NULL,
  `DrugID` int NOT NULL,
  PRIMARY KEY (`DrugID`),
  UNIQUE KEY `DrugID_UNIQUE` (`DrugID`),
  KEY `Man_idx` (`ManufacturerID`),
  CONSTRAINT `Man` FOREIGN KEY (`ManufacturerID`) REFERENCES `vendor` (`ManufacaturerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drug_inventory`
--

LOCK TABLES `drug_inventory` WRITE;
/*!40000 ALTER TABLE `drug_inventory` DISABLE KEYS */;
INSERT INTO `drug_inventory` VALUES (99,66,1),(3005,66,2),(3,77,3);
/*!40000 ALTER TABLE `drug_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `SSN` varchar(45) NOT NULL,
  `Address` varchar(45) NOT NULL,
  `DateOfBirth` datetime NOT NULL,
  PRIMARY KEY (`SSN`),
  UNIQUE KEY `SSN_UNIQUE` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES ('Chris','Sutton','123-65-5362','124','2001-12-29 00:00:00'),('maye','jeans','235-35-1234','4321 apple drive','1969-06-12 00:00:00'),('Francis','Green','243-08-9038','7592 N. Princess Court\nEvans, GA 30809','1995-09-16 00:00:00'),('Jackson','Williams','585-78-6392','2541 apple st','1999-12-31 00:00:00');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `physician`
--

DROP TABLE IF EXISTS `physician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `physician` (
  `SSN_Phy` varchar(12) NOT NULL,
  `PrescriberID` int NOT NULL,
  PRIMARY KEY (`PrescriberID`),
  UNIQUE KEY `PrescriberID_P_UNIQUE` (`PrescriberID`),
  UNIQUE KEY `SSN_Phy_UNIQUE` (`SSN_Phy`) /*!80000 INVISIBLE */,
  CONSTRAINT `SS` FOREIGN KEY (`SSN_Phy`) REFERENCES `person` (`SSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `physician`
--

LOCK TABLES `physician` WRITE;
/*!40000 ALTER TABLE `physician` DISABLE KEYS */;
INSERT INTO `physician` VALUES ('235-35-1234',505);
/*!40000 ALTER TABLE `physician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_info`
--

DROP TABLE IF EXISTS `prescription_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription_info` (
  `PrescriptionID` int NOT NULL,
  `DrugID_P` int NOT NULL,
  `PrescriberID_P` int NOT NULL,
  `CustomerID_P` int NOT NULL,
  PRIMARY KEY (`PrescriptionID`),
  UNIQUE KEY `DrugID_UNIQUE` (`DrugID_P`),
  UNIQUE KEY `PrescriberID_UNIQUE` (`PrescriberID_P`),
  UNIQUE KEY `CustomerID_UNIQUE` (`CustomerID_P`),
  KEY `CustomerID_1_idx` (`DrugID_P`,`PrescriberID_P`,`CustomerID_P`),
  CONSTRAINT `CustomerID_1` FOREIGN KEY (`DrugID_P`, `PrescriberID_P`, `CustomerID_P`) REFERENCES `prescription_status` (`DrugID`, `PrescriberID`, `CustomerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_info`
--

LOCK TABLES `prescription_info` WRITE;
/*!40000 ALTER TABLE `prescription_info` DISABLE KEYS */;
INSERT INTO `prescription_info` VALUES (22,2,404,1),(11,3,505,2);
/*!40000 ALTER TABLE `prescription_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_status`
--

DROP TABLE IF EXISTS `prescription_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription_status` (
  `PrescriberID` int NOT NULL,
  `CustomerID` int NOT NULL,
  `DrugID` int NOT NULL,
  `IsFilled` tinyint DEFAULT NULL,
  `IsRefillAllowed` tinyint DEFAULT NULL,
  PRIMARY KEY (`PrescriberID`,`CustomerID`,`DrugID`),
  UNIQUE KEY `DrugID_UNIQUE` (`DrugID`),
  UNIQUE KEY `CustomerID_UNIQUE` (`CustomerID`),
  UNIQUE KEY `PrescriberID_UNIQUE` (`PrescriberID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_status`
--

LOCK TABLES `prescription_status` WRITE;
/*!40000 ALTER TABLE `prescription_status` DISABLE KEYS */;
INSERT INTO `prescription_status` VALUES (404,1,2,0,0),(505,2,3,0,1);
/*!40000 ALTER TABLE `prescription_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `ManufacaturerID` int NOT NULL,
  `ManufacturerName` varchar(45) NOT NULL,
  PRIMARY KEY (`ManufacaturerID`),
  UNIQUE KEY `ManufacaturerID_UNIQUE` (`ManufacaturerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (66,'J and J'),(77,'Pfizer'),(88,'Roche');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-20 14:38:34
