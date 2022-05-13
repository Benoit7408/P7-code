--- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 13 mai 2022 à 12:14
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `comments_id` int NOT NULL AUTO_INCREMENT,
  `comments_quadri` varchar(6) COLLATE utf8mb4_general_ci NOT NULL,
  `comments_message_id` int DEFAULT NULL,
  `comments_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `comments_createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comments_updateAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comments_isActive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`comments_id`),
  KEY `comments_quadri` (`comments_quadri`,`comments_message_id`),
  KEY `comments_message_id` (`comments_message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`comments_id`, `comments_quadri`, `comments_message_id`, `comments_content`, `comments_createdAt`, `comments_updateAt`, `comments_isActive`) VALUES
(2, 'bebe', 58, 'une modification du commentaire 2', '2022-05-11 23:04:22', '0000-00-00 00:00:00', 0),
(3, 'beja', 56, 'une modification du commentaire 2', '2022-05-11 23:05:32', '0000-00-00 00:00:00', 1),
(5, 'beja', 60, 'troisieme commentaire', '2022-05-12 19:00:46', '2022-05-12 19:00:46', 1),
(8, 'beja', 58, 'un essai de plus', '2022-05-13 01:31:39', '2022-05-13 01:31:39', 1),
(20, 'bebe', NULL, 'un nouveau commentaire avec postman', '2022-05-13 00:36:57', '2022-05-13 00:36:57', 1);

-- --------------------------------------------------------

--
-- Structure de la table `likes`
--

DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `likes_message_id` int NOT NULL,
  `likes_message_quadri` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `message_liked` tinyint(1) DEFAULT NULL,
  `message_disliked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`likes_message_id`,`likes_message_quadri`),
  KEY `likes_id` (`likes_message_id`),
  KEY `likes_quadri` (`likes_message_quadri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `likes`
--

INSERT INTO `likes` (`likes_message_id`, `likes_message_quadri`, `message_liked`, `message_disliked`) VALUES
(56, 'bebe', 0, 0),
(56, 'beja', 0, 1),
(57, 'bebe', 1, 0),
(57, 'beja', 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `messages_id` int NOT NULL AUTO_INCREMENT,
  `messages_quadri` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `messages_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `messages_imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `messages_likes` int NOT NULL DEFAULT '0',
  `messages_dislikes` int NOT NULL DEFAULT '0',
  `messages_createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `messages_updateAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `messages_isActive` int DEFAULT '1',
  PRIMARY KEY (`messages_id`),
  KEY `messages_quadri` (`messages_quadri`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`messages_id`, `messages_quadri`, `messages_content`, `messages_imageUrl`, `messages_likes`, `messages_dislikes`, `messages_createdAt`, `messages_updateAt`, `messages_isActive`) VALUES
(56, 'beja', 'une nouvelle mise a jourgfhgfhgfh', 'http://localhost:3000/images/news/860_ken_jensen_ouch_copy.jpg1651762484694.jpg', 0, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(57, 'beja', 'mise a jour', 'http://localhost:3000/images/news/image-drôle-animal-image-drôle-à-télécharger-chiens-selfie-resized.jpg1651754012307.jpg', 0, 0, '2022-05-04 22:58:30', '0000-00-00 00:00:00', 0),
(58, 'beja', 'contenu', 'http://localhost:3000/images/news/860_ken_jensen_ouch_copy.jpg1652278290033.jpg', 0, 0, '2022-05-11 16:11:30', '2022-05-11 16:11:30', 1),
(59, 'beja', 'contenu', 'http://localhost:3000/images/news/860_ken_jensen_ouch_copy.jpg1652278440752.jpg', 0, 0, '2022-05-11 16:14:00', '2022-05-11 16:14:00', 1),
(60, 'beja', 'contenu', 'http://localhost:3000/images/news/860_ken_jensen_ouch_copy.jpg1652278551607.jpg', 0, 0, '2022-05-11 16:15:51', '2022-05-11 16:15:51', 1);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `users_id` int NOT NULL AUTO_INCREMENT,
  `users_first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_quadri` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `users_bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `users_isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `users_isActive` tinyint(1) NOT NULL DEFAULT '1',
  `users_createdAt` datetime NOT NULL,
  PRIMARY KEY (`users_id`),
  UNIQUE KEY `users_email` (`users_email`),
  UNIQUE KEY `users_quadri` (`users_quadri`)
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`users_id`, `users_first_name`, `users_last_name`, `users_email`, `users_password`, `users_quadri`, `users_avatar`, `users_bio`, `users_isAdmin`, `users_isActive`, `users_createdAt`) VALUES
(139, 'benoit', 'jaloux', 'cvcex@jjh.fr', '$2b$10$ojl7YDrlrs4KqhFVMGPaOeCrsFCK7yD.l9kuoJHs/grT32ViDjrP.', 'beja', '', '', 0, 1, '0000-00-00 00:00:00'),
(141, 'benjamin', 'bernard', 'vnvbnvbnvbn@jjh.fr', '$2b$10$AeyWj.xVLbsiV/b70zNEuuRelHgZl9tWteF3tRjWlKeiX0nbWf0NK', 'bebe', '', '', 0, 1, '0000-00-00 00:00:00'),
(183, 'noemi', 'fan', 'essai@essadfffffi.fr', '$2b$10$i8KjgxJ8lNSX0D.cFCG3qOVsA4SUgmiHciom9MNeug1jO8MGy4NPu', 'nofa', '', '', 0, 1, '0000-00-00 00:00:00');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`comments_quadri`) REFERENCES `users` (`users_quadri`),
  ADD CONSTRAINT `comments_ibfk_3` FOREIGN KEY (`comments_message_id`) REFERENCES `messages` (`messages_id`);

--
-- Contraintes pour la table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`likes_message_id`) REFERENCES `messages` (`messages_id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`likes_message_quadri`) REFERENCES `users` (`users_quadri`);

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`messages_quadri`) REFERENCES `users` (`users_quadri`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
