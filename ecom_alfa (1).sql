-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2025 at 08:02 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom_alfa`
--

-- --------------------------------------------------------

--
-- Table structure for table `alfa_cart`
--

CREATE TABLE `alfa_cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_size` varchar(20) NOT NULL,
  `product_price` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_image` varchar(250) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alfa_cart`
--

INSERT INTO `alfa_cart` (`id`, `user_id`, `product_id`, `product_name`, `product_size`, `product_price`, `quantity`, `product_image`, `created_at`) VALUES
(1, 2, 4, 'Giordano Big Paisley Print Long Sleeve Shirt ', 'S', '89.95 ', 2, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465331/product-images/pam5aq6ithvqajdz0jjf.jpg', '2025-01-21 19:29:54'),
(2, 2, 6, 'Orchid structured Shirt Modern Fit ', 'XL', '89.95 ', 1, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390540/product-images/agddd9ht9lubvhcqbtv8.jpg', '2025-01-21 19:30:05'),
(3, 2, 8, 'Purple Plain Shirt Modern Fit ', 'S', '89.95 ', 3, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465277/product-images/e1usrmjtudoc4eyhexxp.jpg', '2025-01-21 19:34:14');

-- --------------------------------------------------------

--
-- Table structure for table `alfa_users`
--

CREATE TABLE `alfa_users` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` varchar(11) NOT NULL,
  `otp` int(11) NOT NULL,
  `otp_expiry` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `alfa_users`
--

INSERT INTO `alfa_users` (`id`, `name`, `email`, `password`, `status`, `otp`, `otp_expiry`, `created_at`) VALUES
(2, 'Arif Khan', 'fastranking03@gmail.com', '$2b$10$dfrd.PnNwlkSvox5qH8Q9.WJDH1vaIGVrPLHtaejQeupzUpOGqNM.', '0', 0, '', '2025-01-21 17:15:38');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `wear_type` varchar(40) NOT NULL,
  `cat_name` varchar(80) NOT NULL,
  `cat_slug` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `wear_type`, `cat_name`, `cat_slug`, `status`, `created_at`) VALUES
(1, 'top', 'Shirts', 'shirts', 'active', '2025-01-22 07:00:33'),
(2, 'top', 'Jeans', 'jeans', 'active', '2025-01-22 04:48:27'),
(3, 'bottom', 'Trousers ', 'trousers ', 'active', '2025-01-22 04:48:37'),
(4, 'top', 'Tshirts', 'tshirts', 'active', '2025-01-22 04:48:39'),
(5, 'top', 'Suits', 'suits', 'active', '2025-01-22 04:48:42'),
(6, 'top', 'Jackets', 'jackets', 'active', '2025-01-22 04:48:44'),
(7, 'top', 'Polos', 'polos', 'active', '2025-01-22 04:48:45'),
(8, 'top', 'Knitwear', 'knitwear', 'active', '2025-01-22 04:48:49'),
(9, '', 'Wallets', 'wallets', 'active', '2024-12-27 14:18:01'),
(10, 'top', 'Shoes', 'shoes', 'active', '2025-01-22 04:48:54');

-- --------------------------------------------------------

--
-- Table structure for table `customer_address`
--

CREATE TABLE `customer_address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `mobile` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(120) NOT NULL,
  `address_2` varchar(150) NOT NULL,
  `city` varchar(50) NOT NULL,
  `address_type` varchar(30) NOT NULL,
  `postcode` varchar(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_address`
--

INSERT INTO `customer_address` (`id`, `user_id`, `full_name`, `mobile`, `email`, `address`, `address_2`, `city`, `address_type`, `postcode`, `status`, `created_at`) VALUES
(2, 2, 'John', 2147483647, 'divjonny58@gmail.com', 'New Delhi', 'London', 'Delhi', 'Personal', '110085', 0, '2025-01-21 20:02:08');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_type`
--

CREATE TABLE `inventory_type` (
  `id` int(11) NOT NULL,
  `i_type` varchar(60) NOT NULL,
  `status` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inventory_type`
--

INSERT INTO `inventory_type` (`id`, `i_type`, `status`, `created_at`) VALUES
(1, 'Top', 'active', '2025-01-15 17:22:32'),
(2, 'Bottom', 'active', '2025-01-15 17:22:36');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `total_price` varchar(50) NOT NULL,
  `order_status` varchar(50) NOT NULL,
  `payment_status` varchar(50) NOT NULL,
  `payment_type` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_size` varchar(20) NOT NULL,
  `price` varchar(40) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `p_name` varchar(100) NOT NULL,
  `p_price` varchar(11) NOT NULL,
  `discount` varchar(11) NOT NULL,
  `p_main_price` varchar(11) NOT NULL,
  `p_url` varchar(150) NOT NULL,
  `p_title` varchar(120) NOT NULL,
  `similar_product` varchar(100) NOT NULL,
  `p_image` varchar(150) NOT NULL,
  `p_desc` text NOT NULL,
  `p_key_features` text NOT NULL,
  `tags` varchar(100) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `sku` varchar(20) NOT NULL,
  `barcode` varchar(40) NOT NULL,
  `colour` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `new_arrival` varchar(20) NOT NULL,
  `best_seller` varchar(20) NOT NULL,
  `position` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `cat_id`, `p_name`, `p_price`, `discount`, `p_main_price`, `p_url`, `p_title`, `similar_product`, `p_image`, `p_desc`, `p_key_features`, `tags`, `brand`, `sku`, `barcode`, `colour`, `type`, `new_arrival`, `best_seller`, `position`, `status`, `created_at`) VALUES
(4, 1, 'Giordano Big Paisley Print Long Sleeve Shirt', '89.95', '0', '89.95', 'giordano-big-paisley-print-long-sleeve-shirt', 'Giordano Big Paisley Print Long Sleeve Shirt', '', 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465331/product-images/pam5aq6ithvqajdz0jjf.jpg', 'Maggiore, Long Sleeve, Semi Cutaway Collar.\r\n                                            ', '                                                \r\n                                            ', 'test', 'Eterna', '427489', '427489NfjAxqFY', 'red', 'top', 'no', 'no', 0, 0, '2025-01-22 05:45:28'),
(5, 1, 'Rose Structured Shirt Modern Fit', '89.95', '0', '89.95', 'rose-structured-shirt-modern-fit', 'Rose Structured Shirt Modern Fit', '', 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390241/product-images/mwos6ehatyjokwbjug5a.jpg', 'From our premium collection \"1863 by ETERNA\"!\r\nWith this structured COMFORT FIT shirt you will be a tasteful eye-catcher. Special qualities, cotton fabrics with the best finish, high-quality workmanship - all these advantages come together in our premium line.\r\nThis twill shirt is made from pure, non-iron cotton and is therefore a guarantee for the best wearing comfort and feel-good character.\r\nIt comes with a classic Kent collar, no breast pocket and a comfortable cut. The sewn-in decorative band in the front is a special detail. The hem is rounded to a normal length so that this shirt can also be worn casually over trousers.\r\n', '', 'Structured, Comfort-Fit, Premium, Cotton, Non-Iron, Casual', 'Eterna', '1187', '1187thvcl0Dh', 'orchid', 'top', 'yes', 'yes', 0, 0, '2025-01-21 20:34:25'),
(6, 1, 'Orchid structured Shirt Modern Fit', '89.95', '0', '89.95', 'orchid-structured-shirt-modern-fit', 'Orchid structured Shirt Modern Fit', '', 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390540/product-images/agddd9ht9lubvhcqbtv8.jpg', 'From our premium collection \"1863 by ETERNA\"!\r\nWith this structured COMFORT FIT shirt you will be a tasteful eye-catcher. Special qualities, cotton fabrics with the best finish, high-quality workmanship - all these advantages come together in our premium line.\r\nThis twill shirt is made from pure, non-iron cotton and is therefore a guarantee for the best wearing comfort and feel-good character.\r\nIt comes with a classic Kent collar, no breast pocket and a comfortable cut. The sewn-in decorative band in the front is a special detail. The hem is rounded to a normal length so that this shirt can also be worn casually over trousers.', '', 'Structured, Comfort-Fit, Premium, Cotton, Non-Iron, Casual', 'Eterna', '1187', '11875vGidgQY', 'rose', 'top', 'no', 'no', 0, 0, '2025-01-21 20:34:28'),
(7, 1, 'Navy printed Shirt Modern Fit', '89.95', '0', '89.95', 'navy-printed-shirt-modern-fit', 'Navy printed Shirt Modern Fit', '', 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737455685/product-images/amjllsjzyfhyi5yhwpci.jpg', 'This printed long-sleeve shirt is an absolute eye-catcher! The fashionable shark collar and eye-catching floral print make this shirt (without a breast pocket) a must-have. The slightly tailored cut appeals to those who want a slightly more modern interpretation of the classic look. The hem is rounded at a normal length so that this shirt can also be worn casually outside the trousers. It is made from 100% finest cotton (twill, non-iron) and offers first-class comfort.', '', 'Printed, Modern-Fit, Floral, Cotton, Non-Iron, Stylish', 'Eterna', '2239', '2239gzCVK8Hl', '', 'top', 'no', 'no', 0, 0, '2025-01-21 20:34:32'),
(8, 1, 'Purple Plain Shirt Modern Fit', '89.95', '0', '89.95', 'purple-plain-shirt-modern-fit', 'Purple Plain Shirt Modern Fit', '', 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465277/product-images/e1usrmjtudoc4eyhexxp.jpg', 'Opaque, non-slip and non-iron. This shirt only shows what it is supposed to show. It reliably conceals tattoos and body hair.\r\nWith the opaque ETERNA COVER SHIRT, in a slightly tailored cut, you\'ll be way ahead in terms of fashion.\r\nAs a half-ply shirt made of 100% cotton (twill, non-iron), the opaque COVER SHIRT offers excellent comfort.\r\nThe patches on the shark collar and cuffs give it a modern touch. The hem is rounded at a normal length so that this shirt (without a breast pocket) can also be worn casually outside the trousers.\r\nAlways the right fit, always stylish', '', 'Plain, Opaque, Comfort-Fit, Non-Iron, Cotton, Casual', 'Eterna', '8224', '8224dKf54pKC', '', 'top', '', '', 0, 0, '2025-01-21 20:34:34');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_image` varchar(120) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pro_images`
--

CREATE TABLE `pro_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `p_images` varchar(250) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pro_images`
--

INSERT INTO `pro_images` (`id`, `product_id`, `p_images`, `status`) VALUES
(18, 4, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737389855/product-images/agupyprkojd8q6ozbhtn.png', 0),
(19, 5, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390242/product-images/zy6slobn5lxksdk6klwm.jpg', 0),
(20, 5, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390243/product-images/krwra4sbbccoyyjymkla.jpg', 0),
(21, 6, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737390541/product-images/faztcirfdjoxgnhy79xt.jpg', 0),
(22, 7, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737455687/product-images/zurqhmgkydg9nem0yhva.jpg', 0),
(23, 7, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737455689/product-images/ev0vuotzvojuya6y3lkv.jpg', 0),
(24, 8, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465278/product-images/km7kdnbftktglhqp2dsp.jpg', 0),
(25, 8, 'https://res.cloudinary.com/dj7wogsju/image/upload/v1737465279/product-images/lshctqiiqoqacormsgzr.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `p_colour`
--

CREATE TABLE `p_colour` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size` varchar(30) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `p_size`
--

CREATE TABLE `p_size` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `p_size`
--

INSERT INTO `p_size` (`id`, `product_id`, `size`, `quantity`, `status`, `created_at`) VALUES
(73, 4, 'S', 10, 0, '2025-01-20 16:16:52'),
(74, 5, 'S', 0, 0, '2025-01-21 13:17:46'),
(75, 5, 'M', 10, 0, '2025-01-20 16:23:19'),
(76, 5, 'L', 10, 0, '2025-01-20 16:23:19'),
(77, 5, 'XL', 10, 0, '2025-01-20 16:23:19'),
(78, 6, 'S', 10, 0, '2025-01-20 16:28:17'),
(79, 6, 'M', 10, 0, '2025-01-21 14:16:03'),
(80, 6, 'L', 10, 0, '2025-01-21 14:16:07'),
(81, 6, 'XL', 10, 0, '2025-01-20 16:28:17'),
(82, 7, 'S', 10, 0, '2025-01-21 10:34:03'),
(83, 7, 'M', 10, 0, '2025-01-21 10:34:03'),
(84, 7, 'L', 10, 0, '2025-01-21 10:34:03'),
(85, 7, 'XL', 10, 0, '2025-01-21 10:34:03'),
(86, 8, 'S', 10, 0, '2025-01-21 13:13:53'),
(87, 8, 'M', 10, 0, '2025-01-21 13:13:53'),
(88, 8, 'L', 10, 0, '2025-01-21 13:13:53'),
(89, 8, 'XL', 10, 0, '2025-01-21 13:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size_name` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `size_name`, `quantity`, `status`, `created_at`) VALUES
(38, 'S', 1, 0, '2025-01-20 14:18:11'),
(39, 'M', 1, 0, '2025-01-20 14:21:01'),
(40, 'L', 1, 0, '2025-01-20 14:21:06'),
(41, 'XL', 1, 0, '2025-01-20 14:21:11'),
(42, '2XL', 1, 0, '2025-01-20 14:21:19'),
(43, '3XL', 1, 0, '2025-01-20 14:21:27'),
(44, '4XL', 1, 0, '2025-01-20 14:21:41'),
(45, '28', 1, 0, '2025-01-20 14:21:55'),
(46, '30', 1, 0, '2025-01-20 14:22:00'),
(47, '32', 1, 0, '2025-01-20 14:22:07'),
(48, '34', 1, 0, '2025-01-20 14:22:11'),
(49, '36', 1, 0, '2025-01-20 14:22:17'),
(50, '38', 1, 0, '2025-01-20 14:22:20'),
(51, '40', 1, 0, '2025-01-20 14:25:21'),
(52, '44', 1, 0, '2025-01-20 14:25:25'),
(53, '46', 1, 0, '2025-01-20 14:25:30'),
(54, '48', 1, 0, '2025-01-20 14:25:36'),
(55, '50', 1, 0, '2025-01-20 14:25:41'),
(56, '52', 1, 0, '2025-01-20 14:25:55'),
(57, '32R', 1, 0, '2025-01-20 14:30:47'),
(58, '32L', 1, 0, '2025-01-20 14:31:10'),
(59, '34R', 1, 0, '2025-01-20 14:31:15'),
(60, '34L', 1, 0, '2025-01-21 10:17:04');

-- --------------------------------------------------------

--
-- Table structure for table `sizes_fits`
--

CREATE TABLE `sizes_fits` (
  `id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `fit_name` varchar(70) NOT NULL,
  `f_quantity` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alfa_cart`
--
ALTER TABLE `alfa_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alfa_users`
--
ALTER TABLE `alfa_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_type`
--
ALTER TABLE `inventory_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pro_images`
--
ALTER TABLE `pro_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `p_colour`
--
ALTER TABLE `p_colour`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `p_size`
--
ALTER TABLE `p_size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes_fits`
--
ALTER TABLE `sizes_fits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alfa_cart`
--
ALTER TABLE `alfa_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `alfa_users`
--
ALTER TABLE `alfa_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer_address`
--
ALTER TABLE `customer_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `inventory_type`
--
ALTER TABLE `inventory_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pro_images`
--
ALTER TABLE `pro_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `p_colour`
--
ALTER TABLE `p_colour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `p_size`
--
ALTER TABLE `p_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `sizes_fits`
--
ALTER TABLE `sizes_fits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
