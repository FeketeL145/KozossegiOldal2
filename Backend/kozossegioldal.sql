-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 07. 15:24
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `kozossegioldal`
--
CREATE DATABASE IF NOT EXISTS `kozossegioldal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `kozossegioldal`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `posts`
--
-- Létrehozva: 2024. Jan 07. 14:07
-- Utolsó frissítés: 2024. Jan 07. 14:11
--

CREATE TABLE `posts` (
  `Id` char(36) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL,
  `Title` varchar(36) NOT NULL,
  `Author` varchar(30) NOT NULL,
  `Content` text NOT NULL,
  `Image` varchar(40) NOT NULL,
  `CreatedTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `posts`
--

INSERT INTO `posts` (`Id`, `Title`, `Author`, `Content`, `Image`, `CreatedTime`) VALUES
('deb763a6-2a91-4c08-81d9-b9a57d67557f', 'Beauty', 'Valentine', 'Look at this beautiful creature:', 'https://cdn.pixabay.com/photo/2023/12/10', '2024-01-07 15:11:47'),
('e6b8707c-1af0-4931-a38a-6328fa447e77', 'Goodbye', 'Joseph', 'Our vacation comes to an end.', 'https://cdn.pixabay.com/photo/2024/01/03', '2024-01-07 15:09:25');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `__efmigrationshistory`
--
-- Létrehozva: 2024. Jan 07. 14:07
-- Utolsó frissítés: 2024. Jan 07. 14:07
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `__efmigrationshistory`
--

INSERT INTO `__efmigrationshistory` (`MigrationId`, `ProductVersion`) VALUES
('20240107140705_DeletedUsers', '8.0.0');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);


--
-- Metaadat
--
USE `phpmyadmin`;

--
-- A(z) posts tábla metaadatai
--

--
-- A(z) __efmigrationshistory tábla metaadatai
--

--
-- A(z) kozossegioldal adatbázis metaadatai
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
