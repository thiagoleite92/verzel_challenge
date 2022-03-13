-- CreateTable
CREATE TABLE `Lecture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lecture` VARCHAR(191) NOT NULL,
    `module_id` INTEGER NOT NULL,
    `start_date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lecture` ADD CONSTRAINT `Lecture_module_id_fkey` FOREIGN KEY (`module_id`) REFERENCES `Module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
