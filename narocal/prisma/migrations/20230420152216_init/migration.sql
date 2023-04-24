-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('VENDOR', 'CUSTOMER', 'ADMIN');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" INTEGER NOT NULL,
    "role" "public"."Role" NOT NULL,
    "address" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CustomerProfile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "image" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CustomerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."VendorProfile" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "image" TEXT,
    "shpRate" INTEGER NOT NULL,
    "languages" TEXT[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "VendorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Currency" (
    "id" SERIAL NOT NULL,
    "currency" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,

    CONSTRAINT "Currency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Shipment" (
    "id" INTEGER NOT NULL,
    "vendorAddress" TEXT NOT NULL,
    "customerAddress" TEXT NOT NULL,
    "vendorContact" TEXT NOT NULL,
    "customerContact" TEXT NOT NULL,
    "trackingNo" TEXT NOT NULL,
    "shipId" INTEGER NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "code" TEXT,
    "model" TEXT,
    "color" TEXT,
    "gender" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomerProfile_userId_key" ON "public"."CustomerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VendorProfile_userId_key" ON "public"."VendorProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Currency_vendorId_key" ON "public"."Currency"("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "Order_userId_key" ON "public"."Order"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Shipment_shipId_key" ON "public"."Shipment"("shipId");

-- AddForeignKey
ALTER TABLE "public"."CustomerProfile" ADD CONSTRAINT "CustomerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."VendorProfile" ADD CONSTRAINT "VendorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Currency" ADD CONSTRAINT "Currency_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "public"."VendorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Shipment" ADD CONSTRAINT "Shipment_shipId_fkey" FOREIGN KEY ("shipId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."VendorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
