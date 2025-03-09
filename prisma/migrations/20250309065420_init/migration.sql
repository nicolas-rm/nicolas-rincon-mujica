/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `accesstoken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `accesstoken` DROP COLUMN `expiresAt`;
