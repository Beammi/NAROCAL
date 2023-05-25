/*
  Warnings:

  - Changed the type of `vendor` on the `Chat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customer` on the `Chat` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Chat" DROP COLUMN "vendor",
ADD COLUMN     "vendor" INTEGER NOT NULL,
DROP COLUMN "customer",
ADD COLUMN     "customer" INTEGER NOT NULL;
