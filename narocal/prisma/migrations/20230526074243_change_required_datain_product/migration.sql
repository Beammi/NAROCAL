/*
  Warnings:

  - Made the column `model` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "city" TEXT,
ADD COLUMN     "image" TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "model" SET NOT NULL;
