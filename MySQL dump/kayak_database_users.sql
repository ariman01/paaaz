-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: kayak_database
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pooja@gmail.com','$2a$10$rcRDHSAIJelUPR3u5h8P4O8e/uc37X5U99aUzuGkU9TyvQiEx2p7a'),(2,'pooja@yahoo.com','$2a$10$jJBst68mbEZOlzLnFUdFNO.x882Thl41H0tS2JndAJgBA102kRCE2'),(4,'pooja@ya.com','$2a$10$q.vZw0hMTg345XXHEUPIxu5.ikCM4XvlGwXbrswLowb8pDpiJT6fS'),(5,'dev@gmail.com','$2a$10$DNdy6OAdN51WGeHiNN0Lzexd25G6RAtAfw12iEAtR0nsRKoaj6mlu'),(6,'dev@yahoo.com','$2a$10$UDWdDR1Wnlnn7ACv8KYIneWdjfmUS2lcxtUFN9NVJE8WRperWgQRC'),(7,'dev@rediff.com','$2a$10$pB/TJYYRqxPpvIlw2T9wteZqTqTYnxPOzWM8UUZ5CQFVlXeo3TTdi'),(8,'dev@fb.com','$2a$10$pY6wnzSVyxmb3PCGBBA2FOeTV88l9n9Tt.QDyIR4ELa/XCuvQUYvS'),(9,'undefined','$2a$10$mc4F6gbNFrNEv/AU/WQDceDZeW7ycf0aXQf2TVrJhz7eFiFxZHB7e'),(10,'akash@yahoo.com','$2a$10$mc4F6gbNFrNEv/AU/WQDceDZeW7ycf0aXQf2TVrJhz7eFiFxZHB7e'),(11,'pooja.v.patel@sjsu.edu','$2a$10$oas0/eTk83xbucHrywXZTeleFUQtEAhtrG2VnkPHgEFxzJA6jyUbi'),(12,'akash@rediff.com','$2a$10$oas0/eTk83xbucHrywXZTe1icllEXgLdDJ9jXQ4rQwj4pPNIq17Vu'),(13,'abc@gmail.com','$2a$10$oas0/eTk83xbucHrywXZTe/KSp6eSR4SZpS2hfsCxI03lfjxBNJQq');
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

-- Dump completed on 2017-11-21  9:39:57
