/*
  Warnings:

  - Added the required column `rating` to the `VendorProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."VendorProfile" ADD COLUMN     "rating" INTEGER NOT NULL;
