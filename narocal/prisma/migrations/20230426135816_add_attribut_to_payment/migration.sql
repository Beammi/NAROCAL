/*
  Warnings:

  - Added the required column `status` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Payment" ADD COLUMN     "status" TEXT NOT NULL;
