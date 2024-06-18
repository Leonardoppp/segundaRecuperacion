-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: blepvtidldu8fndc7db2-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 13-06-2024 a las 14:34:50
-- Versión del servidor: 8.0.15-5
-- Versión de PHP: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blepvtidldu8fndc7db2`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`uwdirtqcfcpmzjwt`@`%` PROCEDURE `sp_buscar_por_id` (IN `_id` INT)   BEGIN

SELECT * FROM usuarios WHERE id_usuario = _id;

END$$

CREATE DEFINER=`uwdirtqcfcpmzjwt`@`%` PROCEDURE `sp_delete` (IN `_id` INT)   BEGIN
	delete from usuarios where id_usuario=_id;
END$$

CREATE DEFINER=`uwdirtqcfcpmzjwt`@`%` PROCEDURE `sp_insert` (IN `_nombre` VARCHAR(100), IN `_edad` INT)   BEGIN
	insert into usuarios(nombre, edad) values (_nombre, _edad);
END$$

CREATE DEFINER=`uwdirtqcfcpmzjwt`@`%` PROCEDURE `sp_search` ()   BEGIN
	SELECT * FROM usuarios;
END$$

CREATE DEFINER=`uwdirtqcfcpmzjwt`@`%` PROCEDURE `sp_update` (IN `_nombre` VARCHAR(100), IN `_id` INT, IN `_edad` INT(100))   BEGIN
	update usuarios set nombre = _nombre, edad = _edad where id_usuario=_id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `edad`) VALUES
(2, 'miguel', 35),
(3, 'msdfasdfasf', 20),
(4, 'msdfasdfasf', 20),
(5, 'masdfasdfasdfasdfasdfas', 23);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
