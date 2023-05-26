/*
  Warnings:

  - Changed the type of `sender` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `receiver` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "sender",
ADD COLUMN     "sender" INTEGER NOT NULL,
DROP COLUMN "receiver",
ADD COLUMN     "receiver" INTEGER NOT NULL;
