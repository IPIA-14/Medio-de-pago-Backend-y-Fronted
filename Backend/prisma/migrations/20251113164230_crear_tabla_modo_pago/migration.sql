-- CreateTable
CREATE TABLE `ModoPago` (
    `num_pago` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `otros_detalles` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`num_pago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
